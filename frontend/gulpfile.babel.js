'use strict';

// es2015 by babel
// To make *.babel.js working run: `npm i -D babel-core babel-preset-es2015`
// gulp serve --gulpfile gulpfile.babel.js
// https://github.com/PolymerElements/polymer-starter-kit
// rollup vs webpack vs jspm/systemjs
// https://github.com/MaKleSoft/gulp-style-modules
// TODO: add https://github.com/benmosher/eslint-plugin-import
// TODO: postcss using autoprefixer + cssnano

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
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import polybuild from 'polybuild';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Clean Output Directory
gulp.task('clean', () => del(['.tmp', 'dist']));

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {

  let stylesPath = 'styles';
  let srcs = ['all-styles.scss', 'critical.scss'];

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
    .pipe(gulp.dest('dist/scripts/'))
    .pipe($.connect.reload());
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
    }))
    .pipe($.connect.reload());
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', () => {
  return gulp.src(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'])
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
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
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
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
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
      'src/styles/**/*.scss',
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
  gulp.watch(['src/styles/**/*.scss'], ['styles', reload]);
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

// TODO old code

var insert = require('gulp-insert');
var version = '/* myPlugin v' + require('./package').version + ' */\n';
// .pipe(insert.prepend(version))

var zip = require('gulp-zip');
gulp.task('compress', function() {
  return gulp.src('./dist/**')
    .pipe(zip('myPlugin.zip'))
    .pipe(gulp.dest('./dist'));
});

var bump = require('gulp-bump');
gulp.task('bump', function() {
  return gulp.src([
      './{package,bower}.json'
    ])
    .pipe($.bump({
      type: 'patch'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
  isProd = true;
  return runSequence('clean', 'bump', 'getversion', 'js',
    allTasks, 'vulcanize', 'precache', 'copy_bower_components');
});

gulp.task('dev', function() {
  return runSequence('clean', 'getversion', allTasks, 'watch');
});

function bumpType() {
  if (gulp.env.major) {
    return 'major';
  } else if (gulp.env.minor) {
    return 'minor';
  } else {
    return 'patch';
  }
}

gulp.task('bump', function() {
  gulp.src('./*.json')
    .pipe(bump({
      type: bumpType()
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('release', ['bump', 'build']);

gulp.task('jsbundle', function() {
  console.log('==Building JS bundle==');

  //var dest = isProd ? 'dist' : '';
  var dest = 'dist';

  return buildBundle('./scripts/app.js')
    .pipe(source('bundle.js'))
    .pipe($.streamify($.uglify()))
    .pipe($.license('Apache', {
      organization: 'Google Inc. All rights reserved.'
    }))
    .pipe(gulp.dest('./' + dest + '/scripts'))
});

var babelify = require('babelify');
var browserify = require('browserify');
function buildBundle(file) {
  return browserify({
      entries: [file],
      debug: isProd
    })
    .transform(babelify) // es6 -> e5
    .bundle();
}

var fs = require('fs');
gulp.task('getversion', function() {
  version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
});
