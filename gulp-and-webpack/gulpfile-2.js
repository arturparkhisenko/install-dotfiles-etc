//$ npm install gulp gulp-csso gulp-myth gulp-csslint gulp-jshint gulp-uglify gulp-imagemin gulp-rename gulp-concat gulp-plumber del gulp-sourcemaps gulp-fixmyjs gulp-livereload gulp-connect gulp-sass gulp-6to5 --save-dev
//Usage
//clean->build->watch+LR: $ gulp
//only clean: $ gulp clean

// jshint node:true
'use strict';

// plugins & paths
var gulp = require('gulp'), // gulp
  csslint = require('gulp-csslint'), // css lint
  myth = require('gulp-myth'), // css autoprefix
  csso = require('gulp-csso'), // css min
  sass = require('gulp-sass'), // sass
  jshint = require('gulp-jshint'), // js lint
  fixmyjs = require("gulp-fixmyjs"), // js fix
  uglify = require('gulp-uglify'), // js min
  imagemin = require('gulp-imagemin'), // img min
  rename = require('gulp-rename'), // rename
  concat = require('gulp-concat'), // concatenation
  plumber = require('gulp-plumber'), // error handling
  del = require('del'), // cleaning
  sourcemaps = require('gulp-sourcemaps'), // sourcemaps
  livereload = require('gulp-livereload'), // livereload
  connect = require('gulp-connect'), // to run webserver with livereload
  to5 = require('gulp-6to5'), // Turn ES6 code into vanilla ES5

  paths = {
    styles: ['src/{css,components}/**/*.css', '!src/css/notbowervendor/**/*.css'],
    stylessass: 'src/scss/**/*.{scss,sass}',
    scripts: ['src/{js,components}/**/*.js', '!src/js/notbowervendor/**/*.js'],
    images: 'src/img/**/*'
  };

// tasks
gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(csslint())
    .pipe(myth())
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('stylessass', function () {
  return gulp.src(paths.stylessass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename({
      suffix: '-sass'
    }))
    .pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(concat('main.js'))
    .pipe(jshint())
    .pipe(fixmyjs({
      // JSHint settings here
    }))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
});

gulp.task('misc', function () {
  return gulp.src('src/**/*.{html,ico}')
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.stylessass, ['stylessass']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('build', ['connect', 'watch', 'stylessass', 'styles', 'scripts', 'images', 'misc']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
