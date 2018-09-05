const { resolve } = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: resolve('public'),
        historyApiFallback: true,
        inline: true,
        publicPath: '/'
    },
    plugins: [new DashboardPlugin(), new FriendlyErrorsWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,

                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
