const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssimport = require('postcss-import')
const postcsscssnext = require('postcss-cssnext')

const projectRoot = path.resolve(__dirname, '../src');

module.exports = {
  resolve: {
    modules: [projectRoot, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
        }
      },
      { test: /\.(md|txt)$/, loader: 'raw-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: false, importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [postcssimport, postcsscssnext]
              }
            }
          }
        ]
      }
    ]
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  }
}
