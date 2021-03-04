const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const { resolve } = path

module.exports = ({ path = 'build', production = true } = {}) => {
  const buildPath = resolve(__dirname, path || 'build')
  {
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
        loader: 'babel-loader'
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
          path: buildPath,
          publicPath: '/'
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
            patterns: [
              { from: './src/www/', to: './' },
              { from: './src/www/favicons', to: './' }
            ]
          }),
          new StatsWriterPlugin({
            filename: 'stats.json'
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
          filename: 'server.js',
          publicPath: '/'
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
}
