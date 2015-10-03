'use strict';

//es2015 + babel
//https://babeljs.io/docs/learn-es2015/
//To make *.babel.js working run: `npm -i -D babel`
//gulp serve --gulpfile gulpfile.babel.js
//gulp file based on PSK
//https://github.com/PolymerElements/polymer-starter-kit
//TODO: switch to jspm/systemjs?
//TODO: clean package.json
//https://github.com/PolymerElements/polymer-starter-kit/blob/master/docs/add-es2015-support-babel.md
//polylint -> polybuild (include: vulcanize, crisper, polyclean)

// plugins & paths
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import path from 'path';
import historyApiFallback from 'connect-history-api-fallback';
import gulpLoadPlugins from 'gulp-load-plugins';
import polybuild from 'polybuild';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Clean Output Directory
gulp.task('clean', cb => del(['.tmp', 'dist/*', '!dist/.git'], {
  dot: true
}, cb));

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {

  let stylesPath = 'styles';
  let srcs = ['all-styles.scss'];

  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 26',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

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
    .pipe(gulp.dest('dist/' + stylesPath))
    .pipe(gulp.dest('src/' + stylesPath))
    .pipe($.size({
      title: stylesPath
    }))
    .pipe($.connect.reload());
});

// Compile and concat all scripts
gulp.task('scripts', () => {

  gulp.src([
      'src/scripts/**/*.js',
      '!src/scripts/bundle.js'
    ])
    .pipe(gulp.dest('dist/scripts/'));

  return gulp.src([
    // Note: Since we are not using useref in the scripts build pipeline,
    //       you need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
    './src/bower_components/jquery/dist/jquery.min.js',
    //App files
    './src/scripts/app.js'
  ])

  .pipe($.babel())

  .pipe($.concat('bundle.js'))

  .pipe($.uglify({
    preserveComments: 'license'
  }))

  // .pipe(rename({
  //   suffix: '.min'
  // }))

  // Output files
  .pipe(gulp.dest('src/scripts'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size({
      title: 'scripts'
    }))

  .pipe($.connect.reload());
});

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
  let assets = $.useref.assets({
    searchPath: ['.tmp', 'src', 'dist']
  });

  return gulp.src(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'])

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

//main task
gulp.task('serve', ['clean'], (cb) => {
  $.connect.server({
    root: 'src/',
    livereload: true
  });

  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'scripts'],
    'polybuild',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/*.html', '!src/elements/elements.vulcanized.html', '!src/elements/elements.build.html'], ['polybuild']);
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js', '!src/elements/elements.build.js', '!src/elements/elements.vulcanized.js'], ['scripts']);
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
    ['copy', 'styles'], ['images', 'fonts', 'html', 'scripts'],
    'polybuild',
    cb);

  gulp.watch(['src/**/*.html', '!src/{elements,test}/**/*.html', '!src/scripts/third-party/**/*.html'], ['html']);
  gulp.watch(['src/elements/**/*.html', '!src/elements/elements.vulcanized.html', '!src/elements/elements.build.html'], ['polybuild']);
  gulp.watch(['src/styles/**/*.scss'], ['styles']);
  gulp.watch(['src/{scripts,elements}/**/*.js', '!src/scripts/third-party/**/*', '!src/scripts/bundle.js', '!src/elements/elements.build.js', '!src/elements/elements.vulcanized.js'], ['scripts']);
  // gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images', 'svgssprite']);
  gulp.watch(['src/images/**/*', '!src/images/icons-in-svg/**/*'], ['images']);
});

// Watch Files For Changes & Reload
// gulp.task('serve', ['styles', 'elements', 'images'], function() {
gulp.task('serve:browsersync', ['styles', 'images'], () => {
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

// Build Production Files, the Default Task
gulp.task('default', ['clean'], (cb) => {
  runSequence(
    // ['copy', 'styles'], ['images', 'svgssprite', 'fonts', 'html', 'scripts'],
    ['copy', 'styles'], ['images', 'fonts', 'html', 'scripts'],
    'polybuild',
    cb);
});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
try {
  require('require-dir')('tasks');
} catch (err) {}
