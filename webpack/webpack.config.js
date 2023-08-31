const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
    context:path.resolve(__dirname, 'src'),
    mode:'development',
    entry: './index.js',
    output: {
        filename: `./${fileName('js')}`,
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        port: 3000,
        hot: isDev,
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),
            minify:{
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./styles/${fileName('css')}`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                  },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                  },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader','eslint-loader'
                ]
            },
        ]
    }
}