# css the right way aka bleeding edge

## PostCSS

- [video tuts](http://leveluptuts.com/tutorials/postcss-tutorials/)

### plugins

- https://github.com/postcss/gulp-postcss
- https://github.com/postcss/autoprefixer
- https://github.com/cssnext/postcss-cssnext
- https://github.com/ben-eb/cssnano
- https://github.com/jonathantneal/precss
- https://github.com/postcss/postcss-import
- https://github.com/postcss/postcss-url
- https://github.com/jonathantneal/postcss-partial-import
- https://github.com/postcss/postcss-nested

```javascript
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

gulp.task('styles', () => {
  let processors = [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    cssnext,
    cssnano
  ];

  return gulp.src('src/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});
```

## Animations

- web animations
- css animations
- css transitions
- svg animations
- move gsap tween
- animo velocity jquery
