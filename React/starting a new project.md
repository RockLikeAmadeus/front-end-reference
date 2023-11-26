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

9. `$ npm install --save-dev jest-environment-jsdom`
10. Add the test environment we just installed to the project by opening `package.json` and adding the following section at the bottom:

```json
{
    ...,
    "jest": {
        "testEnvironment": "jsdom",
        "globals": {
          "IS_REACT_ACT_ENVIRONMENT": true
        }
    }
}
```

Note: this enables the React `act()` function, which pauses until asynchronous rendering has completed. It's useful, but not requierd for React testing. See https://reacttdd.com/understanding-act.

11. If you'd like, add the `watchAll` flag to the `test` command to automatically re-run tests when changes are detected:

```json
  ...
  "scripts": {
    "test": "jest --watchAll"
  },
  ...
```

12. Create a place for initial sample data, for manual testing.

````
$ touch src/sampleData.js
```

It's probably easier to populate this file after you've created some initial components and have a better idea of the structure of data they'll expect, but you could also use this as an opportunity to define that structure.

See the example [here](appointments-example-app/src/sampleData.js).

13. Add an application entry point: react apps are heirarchies of components, and the entry point should render the root component (note, we typically don't want to test-drive root components). Keep the entry point brief, and only use it to instantiate dependencies and to call `render()`
````
