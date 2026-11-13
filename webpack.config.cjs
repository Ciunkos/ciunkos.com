const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const { hasWebp } = require('./scripts/cover-loader.cjs')

const { resolve } = path

const buildPath = resolve(__dirname, 'build')
const distPath = resolve(__dirname, 'dist')

const production = true

module.exports = () => {
  const commonPlugins = [
    production &&
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
    new webpack.LoaderOptionsPlugin({
      minimize: production,
      debug: !production
    })
  ].filter(x => x)

  const commonLoaders = [
    {
      test: /\.js$/,
      include: /.*/,
      loader: 'babel-loader',
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    },
    // JSON needs no rule: webpack parses it
    {
      test: /\.(md|txt)$/,
      type: 'asset/source'
    },
    {
      test: hasWebp,
      loader: resolve(__dirname, 'scripts/cover-loader.cjs')
    },
    // a WebP or MP4 imported directly (blog/charts); cover twins come from cover-loader
    {
      test: /\.(webp|mp4)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name].[contenthash:32][ext]'
      }
    },
    {
      test: /\.(jpg|png)$/,
      exclude: hasWebp,
      type: 'asset/resource',
      generator: {
        filename: '[name].[contenthash:32][ext]'
      }
    }
  ]

  return [
    {
      name: 'browser',
      entry: './src/app.js',
      resolve: {
        modules: [resolve(__dirname, 'src'), 'node_modules']
      },
      output: {
        filename: 'app-[contenthash].js',
        chunkFilename: '[name]-[contenthash].js',
        path: distPath,
        publicPath: process.env.PUBLIC_PATH ?? '/'
      },
      devtool: 'source-map',
      // one file per async chunk: the template adds the blog chunk to the posts by its name
      optimization: { splitChunks: false },
      module: {
        rules: [
          ...commonLoaders,
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  importLoaders: 1
                }
              }
            ]
          }
        ]
      },
      plugins: [
        ...commonPlugins,
        new MiniCssExtractPlugin({
          filename: 'styles-[contenthash].css'
        }),
        new CopyPlugin({
          patterns: [
            {
              from: './src/www/',
              to: './',
              globOptions: { ignore: ['**/vendor/**'] }
            },
            // Vendored files are served byte for byte: pages load them with an SRI hash,
            // so Terser must not touch them (it minifies copied .js assets too).
            {
              from: './src/www/vendor/',
              to: './vendor/',
              info: { minimized: true }
            }
          ]
        }),
        new StatsWriterPlugin({
          filename: '../build/stats.json'
        })
      ]
    },
    {
      name: 'server',
      target: 'node',
      entry: './src/server/index.js',
      resolve: {
        modules: [resolve(__dirname, 'src'), 'node_modules']
      },
      output: {
        path: buildPath,
        filename: 'server.cjs',
        chunkFilename: '[name].server.cjs',
        publicPath: process.env.PUBLIC_PATH ?? '/'
      },
      module: {
        rules: [
          ...commonLoaders,
          {
            test: /\.css$/,
            use: ['isomorphic-style-loader', 'css-loader']
          }
        ]
      },
      plugins: commonPlugins
    }
  ]
}
