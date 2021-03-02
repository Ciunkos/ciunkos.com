const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildPath = path.resolve(__dirname, 'dev')

module.exports = () => ({
  entry: './src/app.js',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: 'src/assets',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: {
      disableDotRule: true,
      index: 'static.html'
    }
  },
  devtool: 'eval',
  output: {
    filename: 'app.js',
    path: buildPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto'
      },
      { test: /\.(md|txt)$/, loader: 'raw-loader' },
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
      patterns: [
        { from: "src/www", to: "src" }
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    })
  ]
})
