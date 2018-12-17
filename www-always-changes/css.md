# css the right way aka bleeding edge

> 100% = 1 em ~= 16px ~= 14pt

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [PostCSS](#postcss)
  - [Plugins postcss.parts](#plugins-postcssparts)
- [Animations](#animations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## [PostCSS](https://postcss.org/)

### Plugins [postcss.parts](https://www.postcss.parts/)

- [https://github.com/postcss/gulp-postcss](https://github.com/postcss/gulp-postcss)
- [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer) (-core is deprecated)
- [https://github.com/cssnext/postcss-cssnext](https://github.com/cssnext/postcss-cssnext)
- [https://github.com/ben-eb/cssnano](https://github.com/ben-eb/cssnano)
- [https://github.com/jonathantneal/precss](https://github.com/jonathantneal/precss)
- [https://github.com/postcss/postcss-import](https://github.com/postcss/postcss-import)
- [https://github.com/postcss/postcss-url](https://github.com/postcss/postcss-url)
- [https://github.com/jonathantneal/postcss-partial-import](https://github.com/jonathantneal/postcss-partial-import)
- [https://github.com/postcss/postcss-nested](https://github.com/postcss/postcss-nested)

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
