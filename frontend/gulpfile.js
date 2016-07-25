// 'use strict';

// es2015 by babel
// To make *.babel.js working run: `npm i -D babel-core babel-preset-es2015`
// gulp serve --gulpfile gulpfile.babel.js
// https://github.com/PolymerElements/polymer-starter-kit
// rollup vs webpack vs jspm/systemjs
// https://github.com/MaKleSoft/gulp-style-modules

// Plugins & paths
var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var bs = require('browser-sync').create();
var reload = bs.reload;
var merge = require('merge-stream');
var path = require('path');
var historyApiFallback = require('connect-history-api-fallback');
var webpack = require('webpack');
var wpConfig = require('./webpack.config.js');
// var polybuild = require('polybuild');
var postcssImport = require('postcss-import');
// var postcssUrl = require('postcss-url');
var postcssCssnext = require('postcss-cssnext');
var cssnano = require('cssnano');
// var postcssBrowserReporter = require('postcss-browser-reporter');
// var postcssReporter = require('postcss-reporter');

// Configured by support links:
// list https://github.com/ai/browserslist
// http://caniuse.com/

const AUTOPREFIXER_BROWSERS = [
  'Edge >= 13',
  'ff >= 31',
  'and_ff >= 44',
  'Chrome >= 38',
  'and_chr >= 47',
  'Safari >= 9',
  'ios_saf >= 9',
  'Opera >= 21',
  'op_mob >= 33',
  'Android >= 5.0'
];

// Clean Output Directory
gulp.task('clean', () => del(['.tmp', 'dist']));

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {

  let stylesPath = 'styles';
  let srcs = ['all-styles.css', 'critical.css'];

  return gulp.src(srcs.map(function(src) {
      return path.join('src', stylesPath, src);
    }))
    // .pipe($.changed('src/' + stylesPath, {
    //   // extension: '.css'
    // }))
    .pipe($.sourcemaps.init())
    .pipe($.postcss([
      postcssImport(),
      // require('postcss-url')(),
      postcssCssnext({
        browsers: AUTOPREFIXER_BROWSERS
      }), //autoprefixer included
      cssnano({
        safe: true
      })
      // require('postcss-browser-reporter'),
      // postcssReporter()
    ]))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/' + stylesPath))
    .pipe(gulp.dest('src/' + stylesPath))
    .pipe($.size({
      title: stylesPath
    }));
});

// WebPack scripts only
gulp.task('webpack', () => {
  webpack(wpConfig, function(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({
      // output options
      // https://github.com/webpack/docs/wiki/node.js-api
      chunks: false
    }));
    $.util.log('[webpack]', 'Packed successfully!');
  });
});

// Compile and concat all scripts
gulp.task('scripts', () => {
  return gulp.src([
      'src/scripts/**/*.js'
    ])
    // .pipe($.changed('dist/scripts/'))
    .pipe(gulp.dest('dist/scripts/'));
});

// Images optimization
gulp.task('images', () => {
  return gulp.src(['src/images/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images/'))
    .pipe($.size({
      title: 'images'
    }));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', () => {
  return gulp.src(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'])
    // .pipe($.changed('dist/'))
    // Minify Any HTML
    .pipe($.htmlmin({
      collapseWhitespace: true
    }))
    .pipe($.minifyInline())
    // Output Files
    .pipe(gulp.dest('dist/'))
    .pipe($.size({
      title: 'html'
    }));
});

// Scan your HTML for assets & optimize them
gulp.task('optimize', ['images', 'fonts'], function() {
  return gulp.src(['app/**/*.html', '!app/{elements,test,bower_components}/**/*.html'])
    .pipe($.useref())
    .pipe($.if('*.js', $.uglify({
      preserveComments: 'some'
    })))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.html', $.minifyHtml({
      quotes: true,
      empty: true,
      spare: true
    })))
    .pipe(gulp.dest(dist()))
});

// Elements optimizations (for http2)
const optimizeElementsTask = (src, dest) => {
  return gulp.src(src)
    // .pipe($.changed(dest))
    // .pipe($.fileAssets())

  // Script's (js)
  // Extract JS from .html files
  // .pipe($.if('*.html',
  //   $.crisper({
  //     scriptInHead:false
  //   })
  // ))
  // .pipe($.if('*.js',
  //   $.babel({
  //     presets: ['es2015']
  //   })
  // ))
  // .pipe($.if('*.js',
  //   $.uglify({
  //     preserveComments: 'some'
  //   })
  // ))

  // Style's (css), possible for html by gulp-html-postcss
  // .pipe($.if('*.css',
  .pipe($.if('*.html',
    // $.postcss(
    $.htmlPostcss(
      [autoprefixer({
          browsers: AUTOPREFIXER_BROWSERS
        }),
        cssnano({
          safe: true
        })
      ])
  ))

  // Html minification
  // .pipe($.if('*.html',
  //   $.htmlmin({
  //     collapseWhitespace: true
  //   })
  // ))
  // .pipe($.if('*.html',
  //   $.minifyInline()
  // ))

  // Output files
  .pipe(gulp.dest(dest))
    .pipe($.size({
      title: 'optimizeElementsTask'
    }));
};

gulp.task('elements', () => {
  return optimizeElementsTask(['src/elements/**/*.html', '!src/elements/elements.vulcanized.html'], 'dist/elements/');
});

// Vulcanize imports
gulp.task('vulcanize', () => {
  return gulp.src('src/elements/elements.html')
    // .pipe(polybuild({
    //   maximumCrush: true,
    //   suffix: 'vulcanized'
    // }))
    .pipe($.vulcanize({
      inlineCss: true,
      inlineScripts: true,
      stripComments: true
    }))
    .pipe($.minifyInline())
    .pipe($.rename({
      suffix: '.vulcanized'
    }))
    .pipe(gulp.dest('src/elements/'))
    .pipe(gulp.dest('dist/elements/'))
    .pipe($.size({
      title: 'vulcanize'
    }));
});

// Copy All Files At The Root Level (src)
gulp.task('copy', () => {
  let src = gulp.src([
    'src/*',
    '!src/test',
    '!src/precache.json'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));

  let bower = gulp.src([
    'src/bower_components/**/*'
  ]).pipe(gulp.dest('dist/bower_components/'));

  let fonts = gulp.src([
    'src/fonts/**/*'
  ]).pipe(gulp.dest('dist/fonts/'));

  let elements = gulp.src(['src/elements/**/*.html'])
    .pipe(gulp.dest('dist/elements/'));

  return merge(src, bower, fonts, elements)
    .pipe($.size({
      title: 'copy'
    }));
});

// Main task, watch files for changes & reload
gulp.task('serve', ['clean'], function(cb) {
  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  bs.init({
    logPrefix: 'bsSrc',
    notify: false,
    port: 8080,
    // Note: unsigned certificate which will present a certificate warning
    https: true,
    server: {
      baseDir: 'src',
      middleware: [historyApiFallback()]
    },
    browser: 'chrome'
  });

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html', reload]);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize', reload]);
  gulp.watch(['src/styles/**/*.css', '!src/styles/**/*.min.css'], ['styles', reload]);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/bundle.js', '!src/scripts/third-party/**/*'], ['scripts', 'webpack', reload]);
  gulp.watch(['src/images/**/*'], ['images', reload]);
});

// Main task, watch files for changes & reload
gulp.task('serve:dist', ['clean'], function(cb) {
  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  bs.init({
    logPrefix: 'bsDist',
    notify: false,
    port: 8080,
    // Note: unsigned certificate which will present a certificate warning
    https: true,
    server: {
      baseDir: 'dist',
      middleware: [historyApiFallback()]
    },
    browser: 'chrome'
  });

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html', reload]);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize', reload]);
  gulp.watch(['src/styles/**/*.css', '!src/styles/**/*.min.css'], ['styles', reload]);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/bundle.js', '!src/scripts/third-party/**/*'], ['scripts', 'webpack', reload]);
  gulp.watch(['src/images/**/*'], ['images', reload]);
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], (cb) => {
  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);
});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
// require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
// try { require('require-dir')('tasks'); } catch (err) {}
