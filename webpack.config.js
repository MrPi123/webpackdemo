var path = require('path')
var webpack = require('webpack');
var webapckServer = require('webpack-dev-server')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        // publicPath: './dist/',
        filename: "main.js"
    },
    module: {
        loaders: [{
                test: /\.(scss|sass|css)$/, // pack sass and css files
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader" })
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=../images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('webpack demo'),
        new ExtractTextPlugin("../css/[name].css"), // pack all the sass and css files into index.csss
    ]
};