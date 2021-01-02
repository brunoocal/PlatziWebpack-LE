const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
       home: path.resolve(__dirname, '../src/js/index-wCss.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist-dev'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins',
            template: path.resolve(__dirname, '../index.html')
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    
    ]
}