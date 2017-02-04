'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'ng-annotate-loader!babel-loader',
        exclude: /node_modules|bower_components/ },
      { test: /\.html$/,
        loader: 'raw-loader' },
      { test: /\.css$/,
        loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      inject: 'body',
      hash: true
    }),
    // new webpack.ResolverPlugin(
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    // ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
