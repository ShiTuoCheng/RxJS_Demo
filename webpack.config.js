
const Path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {

    index: './index.js'
  },

  output: {

    filename: "[name].[hash:8].bundle.js",
    path: Path.resolve(__dirname, 'dist')
  },

  //loader
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [ "es2015" ]
            }
          }
        ]
      }
    ]
  },



  plugins: [

    new cleanWebpackPlugin("dist"),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
};