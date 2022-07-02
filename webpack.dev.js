const path = require('path');
const outputPath = path.resolve(__dirname, 'public');
const loader = require('sass-loader');
const BomPlugin = require('webpack-utf8-bom');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
// const { webpackMerge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: "./public",
            staticOptions: {
                ignored: /node_modules/,
            },
        },
        open: true,
    },
    plugins: [
        // new BomPlugin(true),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css', //分割
        // }),
        // new ESLintPlugin({
        //     fix: true
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body', //分割

        })
    ]
});