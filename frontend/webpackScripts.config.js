//webpack --progress --colors
//webpack-dev-server --progress --colors
//http://localhost:8080/webpack-dev-server/
//https://github.com/webpack/docs/wiki/shimming-modules
//https://www.npmjs.com/package/globals-loader
//http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals

var webpack = require('webpack');
var path = require('path');
// var BowerWebpackPlugin = require('bower-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    bundle: [
      //App files
      '.app.js'
    ]
  },

  // devtool: 'source-map',

  watch: false,

  output: {
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

    // new webpack.ResolverPlugin(
    //   [new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader']
    // ),

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
      compress: { //or compressor
        pure_getters: true,
        unsafe: true,
        warnings: false
        // unsafe_comps: true, //not documented
        // screw_ie8: true //not documented
      },
      output: {
        comments: false
          // semicolons: true
      }
    })

  ]

};

module.exports = config;
