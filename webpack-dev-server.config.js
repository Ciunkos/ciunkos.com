const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssimport = require('postcss-import')
const postcsscssnext = require('postcss-cssnext')

const buildPath = path.resolve(__dirname, 'dev')

module.exports = () => ({
  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/app.js'],
  externals: ['express', 'encoding'],
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin(
      [
        {
          from: 'www'
        }
      ],
      path.resolve(__dirname, 'src')
    ),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    })
  ]
})
