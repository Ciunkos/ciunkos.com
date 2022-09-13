const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

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
      exclude: /node_modules/,
      loader: 'babel-loader',
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    },
    {
      test: /\.json$/,
      use: 'json-loader',
      type: 'javascript/auto'
    },
    {
      test: /\.(md|txt)$/,
      loader: 'raw-loader'
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]'
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
        path: distPath,
        publicPath: process.env.PUBLIC_PATH ?? '/'
      },
      devtool: 'source-map',
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
          patterns: [{ from: './src/www/', to: './' }]
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
