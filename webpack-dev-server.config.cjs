const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { hasWebp } = require('./scripts/cover-loader.cjs')

const buildPath = path.resolve(__dirname, 'dev')

module.exports = () => ({
  entry: './src/app.js',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    hot: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: {
      disableDotRule: true
    }
  },
  devtool: 'eval',
  output: {
    filename: 'app.js',
    path: buildPath,
    publicPath: process.env.PUBLIC_PATH ?? '/'
  },
  module: {
    rules: [
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
        test: hasWebp,
        loader: path.resolve(__dirname, 'scripts/cover-loader.cjs')
      },
      {
        test: /\.(jpg|png)$/,
        exclude: hasWebp,
        type: 'asset/resource',
        generator: {
          filename: '[name].[contenthash:32][ext]'
        }
      },
      { test: /\.(md|txt)$/, type: 'asset/source' },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: false, importLoaders: 1 }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [{ from: './src/www/', to: './' }]
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    })
  ]
})
