# js the right way aka bleeding edge

2 ways of app:
use webpack + webpackdevserver (optionally: babel loader)
use browsersync + browserify (optionally: babelify)

- vulcanize
- crisp
- babel crisped - to app.js
- alright alright alright!
- sw-precache sw-toolbox app-shell add to js

- polylint -> polybuild (include: vulcanize, crisper, polyclean)

https://github.com/PolymerElements/polymer-starter-kit/blob/master/docs/add-es2015-support-babel.md
https://github.com/ebidel/polymer-gmail/blob/master/index.html
https://github.com/ebidel/polymer-gmail/blob/master/scripts/app.js

- run es6 in console with babel-node
- backend mockups: mockable.io, apiary.io, jsonplaceholder.typicode.com
- use https://github.com/ikeagold/task.js yo!

https://github.com/babel/babel/tree/development/packages
https://www.npmjs.com/search?q=babel-plugin

100% = 1 em ~= 16px ~= 14pt

getBoundingClientRect

gulp -> npm start / npm test on src/dist

## bundlers

### es2015

### webpack

### jspm

https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md#4-write-application-code
https://github.com/jspm/jspm-cli/issues/171
https://stackoverflow.com/questions/31350001/use-jspm-to-load-script-that-depends-on-global-jquery
https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#meta

- `jspm bundle app/**/* - [app/**/*] dependency-bundle`
- It traces your entire app and its third party dependencies, and then removes your app from the bundle... leaving you with just your third party dependencies. This could just as easily be:
- `jspm bundle react + bluebird + react-router dependency-bundle.js`

### rollup

http://rollupjs.org/

### requirejs

http://stackoverflow.com/questions/5608685/using-requirejs-how-do-i-pass-in-global-objects-or-singletons-around
http://stackoverflow.com/questions/18450276/how-to-share-data-between-different-modules-in-requirejs-javascript

## todo
- update my site and use colors from my palette and http://www.colorhunt.co/
  - I DO: FRONT-END DEVELOPMENT, FRONT-END PROJECT MANAGEMENT & CONSULTING, WEBSITE TESTING, CODE AUDITS AND REVIEWS. I WRITE ARTICLES.
  - nice too https://helloanselm.com/cv/
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
