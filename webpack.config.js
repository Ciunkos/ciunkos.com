const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssimport = require('postcss-import')
const postcsscssnext = require('postcss-cssnext')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const { resolve } = path

const locales = ['', 'pl']

const flatten = arr => {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flatten(flat) : flat
}

module.exports = ({ path, production = true, locale = '' }) => {
  const buildTime = new Date().toISOString().replace(/:|\./g, '_')
  const buildPath = resolve(__dirname, path || 'build')
  const dev = !production ? 'development' : ''
  /* eslint-disable no-console */
  console.log(`Build started at ${buildTime}`)
  /* eslint-disable no-console */
  console.log({
    buildPath,
    production,
    locale
  })

  return flatten(
    locales.map((locale = '') => {
      const localizedResourcePatten = () => new RegExp('(LOCALE)(.*?)')

      const commonPlugins = [
        ...[
          locale &&
            new webpack.NormalModuleReplacementPlugin(
              localizedResourcePatten(locale),
              resource => {
                /* eslint-disable no-param-reassign */
                resource.request = resource.request.replace(
                  localizedResourcePatten(locale),
                  `$1$2/${locale}`
                )
              }
            )
        ].filter(x => x),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: production,
          debug: !production
        })
      ]

      const commonLoaders = [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.(md|txt)$/,
          loader: 'raw-loader'
        },
        {
          test: /\.(jpg|png|svg)$/,
          loaders: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
              }
            }
          ]
        },
        {
          test: /\.csv$/,
          loader: 'dsv-loader'
        }
      ]

      return [
        {
          // The configuration for the client
          name: `browser-${locale}`,
          entry: './src/app.js',
          resolve: {
            modules: [resolve(__dirname, 'src'), 'node_modules']
          },
          output: {
            filename: `${['app', locale, dev, '[hash]']
              .filter(x => x)
              .join('-')}.js`, // Name of output file
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
                })
              }
            ]
          },
          plugins: [
            ...commonPlugins,
            new webpack.optimize.UglifyJsPlugin({
              beautify: false,
              mangle: {
                screw_ie8: true,
                keep_fnames: true
              },
              compress: {
                screw_ie8: true,
                warnings: false
              },
              comments: false
            }),
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
              filename: `${['stats', locale].filter(x => x).join('-')}.json`
            })
          ]
        },
        {
          name: `server-${locale}`,
          target: 'node',
          entry: './src/server/index.js',
          resolve: {
            modules: [resolve(__dirname, 'src'), 'node_modules']
          },
          output: {
            path: buildPath,
            filename: `${['server', locale].filter(x => x).join('-')}.js`,
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
    })
  )
}