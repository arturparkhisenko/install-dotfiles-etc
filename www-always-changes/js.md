<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [js the right way aka bleeding edge](#js-the-right-way-aka-bleeding-edge)
  - [good things for app](#good-things-for-app)
  - [linting](#linting)
  - [bundlers](#bundlers)
  - [Software design principles](#software-design-principles)
  - [Technology stack](#technology-stack)
  - [bpbp555 (for new tec or languages)](#bpbp555-for-new-tec-or-languages)
  - [4 steps of bpbp555](#4-steps-of-bpbp555)
  - [not an architecture](#not-an-architecture)
    - [Code patterns](#code-patterns)
    - [OOP patterns (OOP it's all about state)](#oop-patterns-oop-its-all-about-state)
    - [GUI&DB Patterns](#guidb-patterns)
    - [Communication Patterns](#communication-patterns)
    - [Deployment models](#deployment-models)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# js the right way aka bleeding edge

## good things for app

- use webpack + webpackdevserver (optionally: babel loader)
- use browsersync
- [x] app-shell (wsk/amp)
- backend mockups: mockable.io, apiary.io, jsonplaceholder.typicode.com
- getBoundingClientRect
- gulp -> npm start / npm test on src/dist

## linting

- eslint-plugin-html
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## bundlers

- [webpack](https://webpack.js.org/)
- [rollup](https://rollupjs.org)

## Software design principles

- DRY don't repeat yourself
- YAGNI you aren't gonna need it (yet)
- SRP single responsible reason
- TDA tell(to do), don't ask (forEach aka map aka filter vs for)
- OCP open closed principle (open for extension, closed for modifying)
- LSP liskov's substution principle (use inheritance only if you mean substitutability)
- DIP dependency injection principle
- CQRS Command-Query Responsibility Segregation

## Technology stack

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
- communication
- productivity

## not an architecture

### Code patterns

- Middleware
- Routers
- Single entry point...

### OOP patterns (OOP it's all about state)

- Facade, Singletone
- Mixin, Closure
- Factory, Decorator
- Class, Object
- Prototype, Dependency Injection

### GUI&DB Patterns

- MVC, MVP, MVVM
- ORM, CRUD, Key-Value

### Communication Patterns

- Pull/Push, Pub/Sub
- REST, RPC, etc.

### Deployment models

- Cloud, SaaS, PaaS
