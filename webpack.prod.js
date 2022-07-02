// const path = require('path');
const loader = require('sass-loader');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
// const { webpackMerge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'production', //分割
    // devtool: 'source-map',
    // devtool: 'none', //noneの時は記入できない
    // entry: {
    //     app: './src/index.js',
    //     sub: './src/sub.js'
    // },
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: `${outputFile}.js`, //分割
    // },
    // module: {
    //     rules: [{
    //             // enforce: 'pre',
    //             // test: /\.js$/,
    //             // exclude: /node-modules/,
    //             // loader: 'eslint-loader',
    //             // options: {
    //             //     fix: true,
    //             // }
    //         },
    //         {
    //             test: /\.js$/,
    //             exclude: /node-modules/,
    //             loader: 'babel-loader'
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader,
    //                 'css-loader',
    //                 'postcss-loader',
    //                 'sass-loader',
    //             ]

    //         },
    //         {
    //             test: /\.(jpe?g|gif|png|svg|mp4|woff2?|ttf|eot)$/,
    //             type: 'asset/resource',
    //             generator: {
    //                 filename: 'images/ [name][ext][query]' //分割
    //             },
    //         },
    //         {
    //             test: /\.html$/,
    //             use: ['html-loader']
    //         }
    //     ]
    // },
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
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }

        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssPlugin(),
            new TerserPlugin
        ]
    }



});