These notes and examples are compiled based on the following sources:
Mastering React Test-Driven Development by Daniel Irvine

# Creating a new React application

React applications should be built test-first, just like everything else. That means, according to YAGNI, we don't want anything in our applications that doesn't meet a needed specification, so we won't typically want to use `create-react-app` to avoid all of the extra stuff it includes.

## Pre-requisites

We need to have NPM, Jest, React, and Babel installed

### NPM

Make sure you have the latest NPM with

```
$ npm install npm@latest -g
```

### Jest

Alternatives exist, but Jest is fine for now.

### Babel

We need Babel for a few things. It gets installed with Jest, so we really just need to add presets and plugins (a preset is a set of plugins). Each plugin enables a specific feature of the ECMAScript standards, or a preprocessor, such as JSX.

## Steps

1. Create and navigate to a new directory for the project.
2. `$ npm init` (the defaults are OK _except_ for the `test command` question: enter `jest`)
3. `$ npm install --save-dev jest`
4. `$ npm install --save react react-dom`
5. `$ npm install --save-dev @babel/preset-env @babel/preset-react`
6. `$ npm install --save-dev @babel/plugin-transform-runtime`
7. `$ npm install --save @babel/runtime`
8. Enable the packages we've just installed by creating a new file `.babelrc` with the contents

```
{
    "presets": ["@babel/env", "@babel/react"],
    "plugins": ["@babel/transform-runtime"]
}
```
