//webpack --progress --colors
//webpack-dev-server --progress --colors
//http://localhost:8080/webpack-dev-server/
//loaders 'style!css' should be read as style(css(input))

var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var WebpackNotifierPlugin = require('webpack-notifier');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: './entry.js',
  output: {
    //path: path.join(__dirname, 'assets'),
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },

  resolve: {
    root: [path.join(__dirname, 'bower_components')]
  },

  // externals: {
  //     // require("jquery") is external and available on the global var jQuery
  //     "jquery": "jQuery"
  // },

  module: {
    loaders: [{
        test: /\.html$/i,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader')
      }, {
        test: /\.js$/,
        loaders: ['babel-loader?optional[]=runtime&stage=0'],
        //exclude: /node_modules/
        exclude: [nodeModulesPath]
      }, {
        test: /\.jpe?g$|\.png$|\.svg$|\.gif$|\.woff?2$|\.ttf$/,
        loader: 'file'
      }
      // {
      //     test: /\.(eot|woff|woff2|ttf|svg|png|gif|jpg|jpeg)$/,
      //     loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      // }
    ]
  },

  postcss: function() {
    return [autoprefixer, csswring];
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },

      output: {
        comments: false,
        semicolons: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ResolverPlugin(
      [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader']
    ),

    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    }),

    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),

    new WebpackNotifierPlugin()
  ]

};

module.exports = config;

//redux webpack.config.js
'use strict';

var webpack = require('webpack')

var env = process.env.NODE_ENV
var config = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'Redux',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config
