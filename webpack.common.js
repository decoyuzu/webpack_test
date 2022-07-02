const path = require('path');
const loader = require('sass-loader');
const BomPlugin = require('webpack-utf8-bom');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ProvidePlugin } = require('webpack');
// const { preventExtensions } = require('core-js/core/object');

module.exports = ({ outputFile, assetFile }) => ({
    entry: {
        app: './src/js/index.js',
        sub: './src/js/sub.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `${outputFile}.js`,
        chunkFilename: `${outputFile}.js`,

    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]

            },
            {
                test: /\.(jpe?g|gif|png|svg|mp4|woff2?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: `images/${assetFile}[ext]`
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new BomPlugin(true),
        new MiniCssExtractPlugin({
            filename: `${outputFile}.css`,
        }),
        new ESLintPlugin({
            fix: true
        }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            utils: [path.resolve(__dirname, './src/js/utils'), 'default'],
        })
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     inject: 'body', //分割

        // })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    name: "vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                utils: {
                    name: "utils",
                    test: /src[\\/]js[\\/]utils/,
                    chunks: 'async',
                }
            },
        }
    },
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, 'src/scss'),
            '@imgs': path.resolve(__dirname, 'src/images')
        },
        extensions: ['.js', '.scss'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }



});