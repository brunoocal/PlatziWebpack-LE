const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
       home: path.resolve(__dirname, '../src/js/index-wCss.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist-dev'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Dev server',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}