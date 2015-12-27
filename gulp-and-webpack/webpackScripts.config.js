//webpack --progress --colors
//webpack-dev-server --progress --colors
//http://localhost:8080/webpack-dev-server/

var webpack = require('webpack');
var path = require('path');

var BowerWebpackPlugin = require('bower-webpack-plugin');
// var WebpackNotifierPlugin = require('webpack-notifier');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  // using multiple entries because es6 loaders
  // not working with es5 classes in global scope
  entry: {
    bundle: [
      './src/bower_components/jquery/dist/jquery.js',
      //App files
      './src/scripts/app.js',
    ]
  },

  // devtool: 'source-map',

  watch: false,

  output: {
    // path: path.join(__dirname, 'assets'),
    // path: __dirname + '/dist/scripts',
    path: __dirname + '/src/scripts',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      // exclude: /(node_modules|bower_components)/,
      exclude: [nodeModulesPath],
      // https://github.com/babel/babel-loader#options
      // loader: 'babel?presets[]=es2015&cacheDirectory=true!script!uglify'
      loader: 'script-loader!uglify-loader'
    }]
  },

  'uglify-loader': {
    mangle: false
  },

  // resolve: {
  //   root: [path.join(__dirname, '/src/bower_components')]
  // },

  // externals - for libs from tag script or cdn
  // externals: {
  //   'jquery': 'jQuery',
  //   'jquery': '$'
  // },

  plugins: [

    new webpack.NoErrorsPlugin(),

    new webpack.ResolverPlugin(
      [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader']
    ),

    // new BowerWebpackPlugin({
    //   modulesDirectories: ['src/bower_components'],
    //   manifestFiles: 'bower.json',
    //   includes: /.*/,
    //   excludes: /.*\.less$/
    // }),

    // providePlugin - for libs from local path
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    //   // 'jquery-ui',
    //   // 'jquery.ui.touch-punch-improved',
    //   // 'jquery.scrollbar',
    //   // 'jquery.validate',
    //   // 'attrchange',
    //   // 'pubnub',
    // }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },

      output: {
        comments: false,
        // semicolons: true
      }
    }),

    // new webpack.HotModuleReplacementPlugin(),

    // new WebpackNotifierPlugin(),
  ]

};

module.exports = config;
