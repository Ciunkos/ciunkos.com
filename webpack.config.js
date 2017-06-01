const webpack = require('webpack');
const path = require('path');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

const buildPath = 'D:\\www\\ciunkos.com' // path.resolve(__dirname, 'dist')
const postcssimport = require('postcss-import');
const postcsscssnext = require('postcss-cssnext');

module.exports = [
    {
        // The configuration for the client
        name: 'browser',
        entry: './src/app.js',
        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules'
            ]
        },
        output: {
            filename: 'app-[hash].js', // Name of output file
            path: buildPath,
            publicPath: '/'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'es2015', {
                                    modules: false
                                }
                            ],
                            'react',
                            'stage-0'
                        ]
                    }
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
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]'
                    }
                },
                {
                    test: /\.csv$/,
                    loader: 'dsv-loader'
                },
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
                                        return [
                                            postcssimport,
                                            postcsscssnext
                                        ]
                                    }
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),

            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),

            new ExtractTextPlugin({
                filename: 'styles-[hash].css',
                disable: false,
                allChunks: true
            }),

            new TransferWebpackPlugin([{
                from: 'www'
            }], path.resolve(__dirname, 'src')),

            // new BundleAnalyzerPlugin(),

            new StatsWriterPlugin({
                filename: 'stats.json'
            })
        ]
    }, {
        // The configuration for the server-side rendering
        name: 'server-side rendering',
        target: 'node',
        entry: './src/server/index.js',

        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules'
            ]
        },
        output: {
            path: buildPath,
            filename: 'server.js',
            publicPath: '/'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'es2015', {
                                    modules: false
                                }
                            ],
                            'react',
                            'stage-0'
                        ]
                    }
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
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]'
                    }
                },
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
            new ExtractTextPlugin({
                filename: 'styles-[hash].css',
                disable: true,
                allChunks: true
            })
        ]
    }

]
