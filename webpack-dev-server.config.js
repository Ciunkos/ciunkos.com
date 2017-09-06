const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssimport = require('postcss-import');
const postcsscssnext = require('postcss-cssnext');

const buildPath = path.resolve(__dirname, 'dev');
const localizedResourcePatten = locale => new RegExp(`(LOCALE)(.*?)`);

module.exports = ({ locale } = {}) => ({
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
          { loader: 'css-loader', options: { modules: false, importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  postcssimport,
                  postcsscssnext
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...(locale ? [new webpack.NormalModuleReplacementPlugin(localizedResourcePatten(locale), (resource) => {
      console.log('replace!!')
      console.log('replace!!')
      console.log('replace!!')
      console.log('replace!!')
      console.log('replace!!')
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      resource.request = resource.request.replace(localizedResourcePatten(locale), `$1$2/${locale}`); // eslint-disable-line no-param-reassign
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      console.log( resource.request)
      // eslint-disable-line no-param-reassign
    })] : []),
    // ...locales.map(locale => (
    //   new webpack.NormalModuleReplacementPlugin(localizedResourcePatten(locale), (resource) => {
    //     console.log('replace!!')
    //     console.log('replace!!')
    //     console.log('replace!!')
    //     console.log('replace!!')
    //     console.log('replace!!')
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     resource.request = resource.request.replace(localizedResourcePatten(locale), '$1index$2'); // eslint-disable-line no-param-reassign
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     console.log( resource.request)
    //     // eslint-disable-line no-param-reassign
    //   })
    // )),
    // new webpack.NormalModuleReplacementPlugin(localizedResourcePatten(locale), (resource) => {
    //   console.log('replace!!')
    //   console.log( resource.request)
    //   resource.request = resource.request.replace(localizedResourcePatten(locale), `LOCALE/${locale}`); // eslint-disable-line no-param-reassign
    //   console.log( resource.request)
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin(
      [{
        from: 'www'
      }],
      path.resolve(__dirname, 'src')
    ),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    })
  ]
})
