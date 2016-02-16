import gulp from 'gulp';
import browserify from 'browserify';
// import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';

gulp.task('build', () => {
  // app.js is your main JS file with all your module inclusions
  return browserify({
      entries: './src/js/app.js',
      debug: true
    })
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

gulp.task('watch', ['build'], () => {
  livereload.listen();
  gulp.watch('./src/js/*.js', ['build']);
});

gulp.task('default', ['watch']);
