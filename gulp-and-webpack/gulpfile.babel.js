'use strict';

// es2015 + babel
// To make *.babel.js working run: `npm -i -D babel-core`
// gulp serve --gulpfile gulpfile.babel.js
// https://github.com/PolymerElements/polymer-starter-kit
// webpack vs jspm/systemjs
// TODO: switch to that gulpfile after polybuild suffix support added
// TODO: clean package.json
// TODO: add PostCSS, by guide http://code.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543
// TODO: add gulp-strip-debug ?
// TODO: eslint check with flag, disabled by default
// TODO: https://github.com/PolymerElements/polymer-starter-kit/blob/master/docs/add-es2015-support-babel.md
// polylint -> polybuild (include: vulcanize, crisper, polyclean)

// plugins & paths
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import fs from 'fs';
import path from 'path';
import swPrecache from 'sw-precache';
import historyApiFallback from 'connect-history-api-fallback';
import gulpLoadPlugins from 'gulp-load-plugins';
import polybuild from 'polybuild';
import webpack from 'webpack';
import wpConfig from './webpackScripts.config.js';
import {
  output as pagespeed
}
from 'psi';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Clean Output Directory
gulp.task('clean', () =>
  return del(['.tmp', 'dist']));

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {

  let stylesPath = 'styles';
  let srcs = ['all-styles.scss'];

  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    // 'ie_mob >= 10',
    'ff >= 26',
    'and_ff >= 42',
    'chrome >= 34',
    'and_chr >= 46',
    'safari >= 8', //require WebRTC plugin
    'opera >= 21',
    // 'op_mini >= 8'
    'op_mob >= 33',
    'ios >= 7',
    'android >= 4.4',
    // 'bb >= 10'
  ];

  return gulp.src(srcs.map(function(src) {
      return path.join('src', stylesPath, src);
    }))
    .pipe($.changed(stylesPath, {
      // extension: '.scss'
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10,
      outputStyle: 'compressed'
    }))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
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

// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enables ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
gulp.task('scripts', () =>
  gulp.src([
    // Note: Since we are not using useref in the scripts build pipeline,
    //       you need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
    './app/scripts/main.js'
    // Other scripts
  ])
  .pipe($.newer('.tmp/scripts'))
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe($.concat('main.min.js'))
  .pipe($.uglify({
    preserveComments: 'some'
  }))
  // Output files
  .pipe($.size({
    title: 'scripts'
  }))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('dist/scripts'))
);

// Transpile all JS to ES5.
gulp.task('js', function() {
  return gulp.src(['app/**/*.{js,html}'])
    .pipe($.sourcemaps.init())
    .pipe($.if('*.html', $.crisper())) // Extract JS from .html files
    .pipe($.if('*.js', $.babel({
      presets: ['es2015']
    })))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/'))
    .pipe(gulp.dest('dist/'));
});

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src('app/scripts/**/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

// Compile and concat all scripts
// gulp.task('scripts-2', () => {
//
//   gulp.src([
//       'src/scripts/**/*.js',
//       '!src/scripts/bundle.js'
//     ])
//     .pipe(gulp.dest('dist/scripts/'));
//
//   return gulp.src([
//     // Note: Since we are not using useref in the scripts build pipeline,
//     //       you need to explicitly list your scripts here in the right order
//     //       to be correctly concatenated
//
//     './src/bower_components/jquery/dist/jquery.min.js',
//     //App files
//     './src/scripts/app.js'
//   ])
//
//   .pipe($.babel())
//
//   .pipe($.concat('bundle.js'))
//
//   .pipe($.uglify({
//     preserveComments: 'license'
//   }))
//
//   // .pipe(rename({
//   //   suffix: '.min'
//   // }))
//
//   // Output files
//   .pipe(gulp.dest('src/scripts'))
//     .pipe(gulp.dest('dist/scripts'))
//     .pipe($.size({
//       title: 'scripts'
//     }))
//
//   .pipe($.connect.reload());
// });

// Images optimization
gulp.task('images', () => {
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

// Copy Web Fonts To Dist
gulp.task('fonts', () => {
  return gulp.src(['src/fonts/**'])
    .pipe(gulp.dest('dist/fonts/'))
    .pipe($.size({
      title: 'fonts'
    }));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', () => {
  return gulp.src(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'])
    // Replace path for vulcanized assets
    // .pipe($.if('*.html', $.replace('elements/elements.html', 'elements/elements.vulcanized.html')))

  // Concatenate And Minify JavaScript
  .pipe($.if('*.js', $.uglify({
      preserveComments: 'some'
    })))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    // .pipe($.if('*.css', $.cssmin()))
    .pipe($.useref())
    // Minify Any HTML
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      loose: true //fix some html
    }))
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'html'
    }))
    .pipe($.connect.reload());
});

// Vulcanize imports
gulp.task('polybuild', () => {
  const DEST_DIR = 'dist/elements';

  gulp.src('src/elements/elements.html')
    .pipe(polybuild({
      maximumCrush: true
    }))
    .pipe(gulp.dest('src/elements'));

  // .pipe($.minifyHtml({
  //   empty: true,
  //   spare: true,
  //   quotes: true,
  //   loose: true //fix some html
  // }))
  // .pipe($.minifyInline())

  return gulp.src(['src/elements/elements.build.html', 'src/elements/elements.build.js'])
    .pipe($.rename(function(path) {
      path.basename = path.basename.replace(/\.build/g, '');
    }))
    .pipe($.rename({
      suffix: '.vulcanized'
    }))
    .pipe(gulp.dest('src/elements'))
    .pipe(gulp.dest(DEST_DIR))
    .pipe($.size({
      title: 'polybuild'
    }));
});

// Create new task and make svg2png task run before it
gulp.task('svgssprite', () => {
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
  ]).pipe(gulp.dest('dist/bower_components'));

  let elements = gulp.src(['src/elements/**/*.html'])
    .pipe(gulp.dest('dist/elements/'));

  let vulcanized = gulp.src(['src/elements/elements.vulcanized.html'])
    .pipe(gulp.dest('dist/elements/'));

  return merge(src, bower, elements, vulcanized)
    .pipe($.size({
      title: 'copy'
    }));
});

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
  .pipe($.size({
    title: 'copy'
  }))
);

// Main task
gulp.task('serve', ['clean'], (cb) => {
  $.connect.server({
    root: 'src/',
    livereload: true
  });

  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'webpack', 'scripts'],
    'polybuild',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html', '!src/elements/elements.build.html'], ['polybuild']);
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js', '!src/elements/elements.build.js', '!src/elements/elements.vulcanized.js'], ['webpack', 'scripts']);
  // gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images', 'svgssprite']);
  gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images']);
});

gulp.task('serve:dist', ['clean'], (cb) => {
  $.connect.server({
    root: 'dist/',
    livereload: true
  });

  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'webpack', 'scripts'],
    'polybuild',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/**/*.html', '!src/elements/elements.vulcanized.html', '!src/elements/elements.build.html'], ['polybuild']);
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js', '!src/elements/elements.build.js', '!src/elements/elements.vulcanized.js'], ['webpack', 'scripts']);
  // gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images', 'svgssprite']);
  gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images']);
});

// Watch Files For Changes & Reload
// gulp.task('serve', ['styles', 'elements', 'images'], function() {
// gulp.task('serve:browsersync', ['styles', 'images'], () => {
//   browserSync({
//     notify: false,
//     logPrefix: 'SWC',
//     snippetOptions: {
//       rule: {
//         match: '<span id="browser-sync-binding"></span>',
//         fn: function(snippet) {
//           return snippet;
//         }
//       }
//     },
//     // Run as an https by uncommenting 'https: true'
//     // Note: this uses an unsigned certificate which on first access
//     //       will present a certificate warning in the browser.
//     // https: true,
//     server: {
//       baseDir: 'src',
//       middleware: [historyApiFallback()],
//       routes: {
//         '/bower_components': 'bower_components'
//       }
//     },
//     browser: 'chrome'
//   });
//
//   gulp.watch(['src/**/*.html'], reload);
//   // gulp.watch(['src/styles/**/*.css'], ['styles', reload]);
//   gulp.watch(['src/styles/**/*.scss'], ['styles', reload]);
//   // gulp.watch(['src/elements/**/*.css'], ['elements', reload]);
//   // gulp.watch(['src/{scripts,elements}/**/*.js'], ['jshint']);
//   gulp.watch(['src/{scripts,elements}/**/*.js'], reload);
//   gulp.watch(['src/images/**/*'], reload);
// });

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    'styles', ['lint', 'html', 'scripts', 'images', 'copy'],
    'generate-service-worker',
    cb
  )
);

// Build Production Files, the Default Task
gulp.task('default', ['clean'], (cb) => {
  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'scripts'],
    'polybuild',
    'webpack',
    cb);
});

// Run PageSpeed Insights
gulp.task('pagespeed', cb =>
  // Update the below URL to the public URL of your site
  pagespeed('example.com', {
    strategy: 'mobile'
      // By default we use the PageSpeed Insights free (no API key) tier.
      // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
      // key: 'YOUR_API_KEY'
  }, cb)
);

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task('copy-sw-scripts', () => {
  return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', 'app/scripts/sw/runtime-caching.js'])
    .pipe(gulp.dest('dist/scripts/sw'));
});

// See http://www.html5rocks.com/en/tutorials/service-worker/introduction/ for
// an in-depth explanation of what service workers are and why you should care.
// Generate a service worker file that will provide offline functionality for
// local resources. This should only be done for the 'dist' directory, to allow
// live reload to work as expected when serving from the 'app' directory.
gulp.task('generate-service-worker', ['copy-sw-scripts'], () => {
  const rootDir = 'dist';
  const filepath = path.join(rootDir, 'service-worker.js');

  return swPrecache.write(filepath, {
    // Used to avoid cache conflicts when serving on localhost.
    cacheId: pkg.name || 'web-starter-kit',
    // sw-toolbox.js needs to be listed first. It sets up methods used in runtime-caching.js.
    importScripts: [
      'scripts/sw/sw-toolbox.js',
      'scripts/sw/runtime-caching.js'
    ],
    staticFileGlobs: [
      // Add/remove glob patterns to match your directory setup.
      `${rootDir}/images/**/*`,
      `${rootDir}/scripts/**/*.js`,
      `${rootDir}/styles/**/*.css`,
      `${rootDir}/*.{html,json}`
    ],
    // Translates a static file path to the relative URL that it's served from.
    stripPrefix: path.join(rootDir, path.sep)
  });
});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
try {
  require('require-dir')('tasks');
} catch (err) {}
