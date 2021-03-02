const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const { resolve } = path

module.exports = ({ path, production = true } = {}) => {
  console.log({
    path,
    __dirname
  })
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
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]

    return [
      {
        // The configuration for the client
        name: 'browser',
        entry: './src/app.js',
        resolve: {
          modules: [resolve(__dirname, 'src'), 'node_modules']
        },
        output: {
          filename: 'app-[hash].js', // Name of output file
          path: buildPath,
          publicPath: '/'
        },
        devtool: 'source-map',
        module: {
          rules: [
            ...commonLoaders,
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: false,
                      importLoaders: 1
                    }
                  }
                ]
              })
            }
          ]
        },
        plugins: [
          ...commonPlugins,
          new ExtractTextPlugin({
            filename: 'styles-[hash].css',
            disable: false,
            allChunks: true
          }),
          new TransferWebpackPlugin(
            [
              {
                from: 'www'
              }
            ],
            resolve(__dirname, 'src')
          ),
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
              use: ExtractTextPlugin.extract({
                fallback: 'isomorphic-style-loader',
                use: 'css-loader'
              })
            }
          ]
        },
        plugins: [
          ...commonPlugins,
          new ExtractTextPlugin({
            filename: 'styles-[hash].css',
            disable: true,
            allChunks: true
          })
        ]
      }
    ]
  }
}
