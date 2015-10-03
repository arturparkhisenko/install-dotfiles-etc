//webpack --progress --colors
//webpack-dev-server --progress --colors
//http://localhost:8080/webpack-dev-server/

var webpack = require('webpack');
var path = require('path');

var BowerWebpackPlugin = require('bower-webpack-plugin');
// var WebpackNotifierPlugin = require('webpack-notifier');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  // entry: './entry.js',

  // using multiple entries because es6 loaders
  // not working with es5 classes in global scope
  entry: {
    a: [
      //App files
      './src/scripts/app.js'
    ]
  },

  devtool: 'source-map',

  watch: false,

  output: {
    //path: path.join(__dirname, 'assets'),
    path: __dirname + '/dist/scripts',
    filename: 'bundle.js'
  },

  resolve: {
    root: [path.join(__dirname, '/dist/bower_components')]
  },

  // externals: {
  // require("jquery") is external and available on the global var jQuery
  //   'jquery': 'jQuery'
  //   'jquery': {
  //     root: 'jQuery',
  //     commonjs: 'jquery',
  //     commonjs2: 'jquery',
  //     amd: 'jquery'
  //   }
  // },

  module: {
    loaders: [{
      test: /\.js$/,
      // exclude: /(node_modules|'bower_components)/,
      exclude: [nodeModulesPath],
      // loader: 'eslint-loader'
      loader: 'babel-loader?optional[]=runtime&stage=0!script-loader'
    }]
  },

  plugins: [

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },

      output: {
        comments: false,
        semicolons: true
      }
    }),

    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   PUBNUB: 'PUBNUB',
    //   Cookies: 'js-cookie'
    // }),

    // new webpack.HotModuleReplacementPlugin(),

    new webpack.ResolverPlugin(
      [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader']
    ),

    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    })

    // new WebpackNotifierPlugin()
  ]

};

module.exports = config;
