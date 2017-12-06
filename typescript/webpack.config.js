var webpack = require('webpack')
var path = require('path')

module.exports = {

  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, './assets'),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
//   resolve: {
//     extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
//   },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    contentBase: "./",
    publicPath: "/assets/",
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

}