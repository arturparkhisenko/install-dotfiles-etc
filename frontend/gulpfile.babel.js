'use strict';

// es2015 by babel
// To make *.babel.js working run: `npm i -D babel-core babel-preset-es2015`
// gulp serve --gulpfile gulpfile.babel.js
// https://github.com/PolymerElements/polymer-starter-kit
// rollup vs webpack vs jspm/systemjs
// https://github.com/MaKleSoft/gulp-style-modules
// TODO: add https://github.com/benmosher/eslint-plugin-import

// Plugins & paths
import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import path from 'path';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import wpConfig from './webpack.config.js';
import polybuild from 'polybuild';

// import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
// import postcssUrl from 'postcss-url';
import postcssCssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
// import postcssBrowserReporter from 'postcss-browser-reporter';
// import postcssReporter from 'postcss-reporter';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

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
    }))
    .pipe($.connect.reload());
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
    .pipe(gulp.dest('dist/scripts/'))
    .pipe($.connect.reload());
});

// Images optimization
gulp.task('images', () => {
  return gulp.src(['src/images/**/*'])
    // .pipe($.changed('dist/images/'))
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
    }))
    .pipe($.connect.reload());
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
        // cssnano()
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

// Main task
gulp.task('serve', ['clean'], (cb) => {
  //http://localhost:8080/
  $.connect.server({
    root: 'src/',
    livereload: true
  });

  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize']);
  gulp.watch(['src/styles/**/*.css', '!src/styles/**/*.min.css'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js'], ['scripts', 'webpack']);
  gulp.watch(['src/images/**/*'], ['images']);
});

gulp.task('serve:dist', ['clean'], (cb) => {
  //http://localhost:8080/
  $.connect.server({
    root: 'dist/',
    livereload: true
  });

  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize']);
  gulp.watch(['src/styles/**/*.css', '!src/styles/**/*.min.css'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js'], ['scripts', 'webpack']);
  gulp.watch(['src/images/**/*'], ['images']);
});

// Watch Files For Changes & Reload
gulp.task('serve:browsersync', ['clean'], function(cb) {
  runSequence(
    ['copy', 'styles'], ['images', 'html', 'scripts'],
    'vulcanize',
    'webpack',
    cb);

  //https://localhost:3000/
  //https://localhost:3001/
  browserSync({
    notify: false,
    logPrefix: 'gulp.es2015',
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
    https: true,
    files: [
      'src/**/*.html',
      'src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html',
      'src/styles/**/*.css',
      'src/{scripts,elements}/**/*.js', '!src/scripts/bundle.js',
      'src/images/**/*'
    ],
    server: {
      baseDir: 'src',
      middleware: [historyApiFallback()],
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    browser: 'chrome'
  });

  gulp.watch(['src/**/*.html'], ['html', reload]);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html'], ['vulcanize', reload]);
  gulp.watch(['src/styles/**/*.css', '!src/styles/**/*.min.css'], ['styles', reload]);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/bundle.js'], ['scripts', 'webpack', reload]);
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
