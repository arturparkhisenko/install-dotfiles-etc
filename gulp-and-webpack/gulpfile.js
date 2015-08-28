'use strict';

// plugins & paths
var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var merge = require('merge-stream');
var path = require('path');
// var fs = require('fs');
// var glob = require('glob');
var historyApiFallback = require('connect-history-api-fallback');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//cssmin -> minifycss = require('gulp-minify-css'),
//minifyInline = require('gulp-minify-inline'),

// var webpack = require('webpack-stream');
var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var webpackConfig = require('webpackScripts.config.js');

var BowerWebpackPlugin = require('bower-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var wpConfig = require('./webpackScripts.config.js');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 26',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.1',
  'bb >= 10'
];

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// .pipe(plumber())
// .pipe(concat('main.min.css'))
// .pipe(rename({
//   suffix: '.min'
// }))

var styleTask = function(stylesPath, srcs) {
  return gulp.src(srcs.map(function(src) {
      return path.join('src', stylesPath, src);
    }))
    .pipe($.changed(stylesPath, {
      // extension: '.scss'
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'compressed'
    }))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.sourcemaps.write())
    // .pipe(gulp.dest('.tmp/' + stylesPath))
    .pipe(gulp.dest('dist/' + stylesPath))
    .pipe(gulp.dest('src/' + stylesPath))
    .pipe($.size({
      title: stylesPath
    }))
    .pipe($.connect.reload());
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {
  return styleTask('styles', ['all-styles.scss']);
});

// gulp.task('elements', function() {
//   return styleTask('elements', ['**/*.css']);
// });

// WebPack scripts only
// gulp.task('webpack', function(callback) {
gulp.task('webpack', function() {
  // return gulp.src('entry.js')
  // .pipe(webpack(require('webpackScripts.config.js')))
  webpack(wpConfig, function(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({
      // output options
    }));
    // callback();
  });
  // .pipe(gulp.dest('src/scripts/'))
  // .pipe(gulp.dest('dist/scripts/'))
  // .pipe($.connect.reload());
});

// WebPack Dev-Server
// gulp.task('webpack-dev-server', function() {
//   new WebpackDevServer(wpConfig, {
//     proxy: {
//       '*': 'http://localhost:8080/'
//     },
//     stats: {
//       colors: true
//     }
//   }).listen(9090, 'localhost', function(err) {
//     if (err) {
//       throw new $.gutil.PluginError('webpack-dev-server', err);
//     }
//     $.gutil.log('[1webpack-dev-server]', 'http://localhost:9090/webpack-dev-server/index.html');
//   });
// });

// scripts
gulp.task('jshint', function() {
  return gulp.src([
      'src/scripts/**/*.js',
      'src/elements/**/*.js',
      'src/elements/**/*.html'
    ])
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint.extract()) // Extract JS from .html files
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('scripts', function() {
  var src = gulp.src([
    'src/scripts/**/*.js',
    '!src/scripts/bundle.js'
  ]).pipe(gulp.dest('dist/scripts/'));
});

// Images optimization
gulp.task('images', function() {
  return gulp.src(['src/images/**/*', '!src/images/icons-in-svg/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images/'))
    .pipe($.size({
      title: 'images'
    }))
    .pipe($.connect.reload());
});

// Copy All Files At The Root Level (src)
gulp.task('copy', function() {
  var src = gulp.src([
    'src/*',
    '!src/test',
    '!src/precache.json'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));

  var bower = gulp.src([
    'src/bower_components/**/*'
  ]).pipe(gulp.dest('dist/bower_components'));

  var elements = gulp.src(['src/elements/**/*.html'])
    .pipe(gulp.dest('dist/elements/'));

  // var vulcanized = gulp.src(['src/elements/elements.html'])
  //   .pipe($.rename('elements.vulcanized.html'))
  //   .pipe(gulp.dest('dist/elements'));

  var vulcanized = gulp.src(['src/elements/elements.vulcanized.html'])
    .pipe(gulp.dest('dist/elements/'));

  return merge(src, bower, elements, vulcanized)
    .pipe($.size({
      title: 'copy'
    }));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function() {
  return gulp.src(['src/fonts/**'])
    .pipe(gulp.dest('dist/fonts/'))
    .pipe($.size({
      title: 'fonts'
    }));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function() {
  var assets = $.useref.assets({
    searchPath: ['.tmp', 'src', 'dist']
  });

  return gulp.src(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'])
    // Replace path for vulcanized assets
    // .pipe($.if('*.html', $.replace('elements/elements.html', 'elements/elements.vulcanized.html')))

  // Temporary disabled
  // .pipe(assets)
  // Concatenate And Minify JavaScript
  .pipe($.if('*.js', $.uglify({
      preserveComments: 'some'
    })))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    // .pipe($.if('*.css', $.cssmin()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Minify Any HTML
    .pipe($.if('*.html', $.minifyHtml({
      quotes: true,
      empty: true,
      spare: true
    })))
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'html'
    }))
    .pipe($.connect.reload());
});

// Vulcanize imports
gulp.task('vulcanize', function() {
  var DEST_DIR = 'dist/elements';

  // return gulp.src('dist/elements/elements.vulcanized.html')
  return gulp.src('src/elements/elements.html')
    .pipe($.vulcanize({
      // dest: DEST_DIR,
      // abspath: '',
      inlineCss: true,
      inlineScripts: true,
      stripComments: true,
      // stripExcludes: false,
      // excludes: [path.resolve('dist/bower_components/polymer/polymer.html')]
    }))
    .pipe($.rename({
      suffix: '.vulcanized',
    }))
    .pipe($.minifyInline())
    .pipe(gulp.dest('src/elements'))
    .pipe(gulp.dest(DEST_DIR))
    .pipe($.size({
      title: 'vulcanize'
    }));
});

// Create new task and make svg2png task run before it
gulp.task('svgssprite', function() {
  return gulp.src(['src/images/**/*.svg', '!src/images/icons-in-svg/**/*.svg'])
    // Run the svg-symbols module, whilst prefixing the created classnames
    .pipe($.svgSymbols({
      className: '.icon--%f',
      title: false
    }))
    // Define where the respond is distributed to
    .pipe(gulp.dest('dist/images/icons-in-svg/'))
    .pipe(gulp.dest('src/images/icons-in-svg/'));
});

gulp.task('svginject', function() {
  var target = gulp.src('./src/index-test.html');
  return target.pipe($.inject(gulp.src('./src/images/icons-in-svg/svg-symbols.svg'), {
      name: 'svg',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
      }
    }))
    .pipe(gulp.dest('./src'));
});

// Generate a list of files that should be precached when serving from 'dist'.
// The list will be consumed by the <platinum-sw-cache> element.
// gulp.task('precache', function(callback) {
//   var dir = 'dist';
//
//   glob('{elements,scripts,styles}/**/*.*', {
//     cwd: dir
//   }, function(error, files) {
//     if (error) {
//       callback(error);
//     } else {
//       files.push('index.html', './', 'bower_components/webcomponentsjs/webcomponents-lite.min.js');
//       var filePath = path.join(dir, 'precache.json');
//       fs.writeFile(filePath, JSON.stringify(files), callback);
//     }
//   });
// });

gulp.task('serve', ['clean'], function(cb) {

  $.connect.server({
    root: 'dist/',
    livereload: true
  });

  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'svginject', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize']);
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js'], ['scripts', 'webpack']);
  // gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images', 'svgssprite', 'svginject']);
  gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images']);
});

// gulp.task('serve:old', ['styles', 'images', 'html', 'vulcanize', 'webpack'], function() {
//   $.connect.server({
//     root: 'src',
//     livereload: true
//   });
//
//   gulp.watch(['src/**/*.html'], ['html']);
//   gulp.watch(['src/styles/**/*.scss'], ['styles']);
//   gulp.watch(['src/{scripts,elements}/**/*.js'], ['vulcanize']);
//   gulp.watch(['src/images/**/*'], ['images']);
// });

// Watch Files For Changes & Reload
// gulp.task('serve', ['styles', 'elements', 'images'], function() {
gulp.task('serve:browsersync', ['styles', 'images'], function() {
  browserSync({
    notify: false,
    logPrefix: 'SWC',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: 'src',
      middleware: [historyApiFallback()],
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    browser: 'chrome'
  });

  gulp.watch(['src/**/*.html'], reload);
  // gulp.watch(['src/styles/**/*.css'], ['styles', reload]);
  gulp.watch(['src/styles/**/*.scss'], ['styles', reload]);
  // gulp.watch(['src/elements/**/*.css'], ['elements', reload]);
  // gulp.watch(['src/{scripts,elements}/**/*.js'], ['jshint']);
  gulp.watch(['src/{scripts,elements}/**/*.js'], reload);
  gulp.watch(['src/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function() {
  browserSync({
    notify: false,
    logPrefix: 'SWC',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist',
    middleware: [historyApiFallback()],
    browser: ['google chrome']
  });
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function(cb) {
  runSequence(
    ['copy', 'styles'],
    'elements', ['jshint', 'images', 'svgssprite', 'fonts', 'html'],
    'vulcanize',
    cb);
  // Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
try {
  require('require-dir')('tasks');
} catch (err) {}
