# js the right way aka bleeding edge
2 best ways of app:
- use webpack + webpackdevserver (optionally: babel loader)
- use browsersync + browserify/jspm (optionally: babelify)
- [x] app-shell (wsk/amp)
- [ ] [https://github.com/ikeagold/task.js](https://github.com/ikeagold/task.js)
- backend mockups: mockable.io, apiary.io, jsonplaceholder.typicode.com
- getBoundingClientRect
- gulp -> npm start / npm test on src/dist

## linting
- eslint-plugin-html
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

## bundlers
## transpile
### babel
- run es6 in console with babel-node
- [https://github.com/babel/babel/tree/development/packages](https://github.com/babel/babel/tree/development/packages)
- [https://www.npmjs.com/search?q=babel-plugin](https://www.npmjs.com/search?q=babel-plugin)

### es2015
- [frontender.info/es6-modules](http://frontender.info/es6-modules/)

### webpack
- [youtube webpack screencast](https://www.youtube.com/watch?v=Om6yGdU_YlQ&list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn&index=17)
- webpack externals - for libs from tag script or cdn
- webpack providePlugin - for libs from local path
- imports-loader
- exports-loader: imports!exports
- expose-loader: expose!imports!exports

### jspm
[https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md#4-write-application-code](https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md#4-write-application-code) [https://github.com/jspm/jspm-cli/issues/171](https://github.com/jspm/jspm-cli/issues/171) [https://stackoverflow.com/questions/31350001/use-jspm-to-load-script-that-depends-on-global-jquery](https://stackoverflow.com/questions/31350001/use-jspm-to-load-script-that-depends-on-global-jquery) [https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#meta](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#meta)
- `jspm bundle app/**/* - [app/**/*] dependency-bundle`
- It traces your entire app and its third party dependencies, and then removes your app from the bundle... leaving you with just your third party dependencies. This could just as easily be:
- `jspm bundle react + bluebird + react-router dependency-bundle.js`

### rollup
[http://rollupjs.org/](http://rollupjs.org/)

### requirejs
[http://stackoverflow.com/questions/5608685/using-requirejs-how-do-i-pass-in-global-objects-or-singletons-around](http://stackoverflow.com/questions/5608685/using-requirejs-how-do-i-pass-in-global-objects-or-singletons-around) [http://stackoverflow.com/questions/18450276/how-to-share-data-between-different-modules-in-requirejs-javascript](http://stackoverflow.com/questions/18450276/how-to-share-data-between-different-modules-in-requirejs-javascript)

## todo
- update my site and use colors from my palette and [http://www.colorhunt.co/](http://www.colorhunt.co/)
  - I DO: FRONT-END DEVELOPMENT, FRONT-END PROJECT MANAGEMENT & CONSULTING, WEBSITE TESTING, CODE AUDITS AND REVIEWS. I WRITE ARTICLES.
  - nice too [https://helloanselm.com/cv/](https://helloanselm.com/cv/)

- REGISTER ON STACKOVERFLOW
- update gulp-gold and release 0.9.0
- update ig-pai-app and release 1.0.0 final version (angular1 is out from game)

# software design principles
- DRY don't repeat yourself
- YAGNI you aren't gonna need it (yet)
- SRP single responsible reason
- TDA tell(to do), don't ask (forEach aka map aka filter vs for)
- OCP open closed principle (open for extension, closed for modifying)
- LSP liskov's substution principle (use inheritance only if you mean substitutability)
- DIP dependency injection principle
- CQRS Command-Query Responsibility Segregation

# Technology stack
- TT(technology trigger): Rust
- EE(extended expectations): React
- SE(slofp enlightment): Ember
- PP(plato of productivity): Node, Java

## bpbp555 (for new tec or languages)
- build tools
- package manager
- basic ideas
- philosophy
- 5-10 most popular libs
- 5-10 people
- 5-10 products using it
- all + and - of tec.

## 4 steps of bpbp555
- awareness (10% of time)
- exploration (20% of time)
- investment (60% of time)
- practice ($)
