const webpack = require('webpack');
const path = require('path');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildPath = path.resolve(__dirname, 'dev')
const postcssimport = require('postcss-import');
const postcsscssnext = require('postcss-cssnext');

module.exports = 
{
    entry: './src/app.js',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    devServer: {
        contentBase: 'src/assets', // Relative directory for base of server
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
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
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                        'stage-0'
                    ]
                }
            },
            { test: /\.(md|txt)$/, loader: 'raw-loader' },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]'
                }
            },
            { test: /\.csv$/, loader: 'dsv-loader' },
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
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),

        new TransferWebpackPlugin([
        { from: 'www' },
        ], path.resolve(__dirname, 'src')),

        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body'
        })
    ]
}
