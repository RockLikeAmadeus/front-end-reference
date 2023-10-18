# Creating a new React application

React applications should be built test-first, just like everything else. That means, according to YAGNI, we don't want anything in our applications that doesn't meet a needed specification, so we won't typically want to use `create-react-app` to avoid all of the extra stuff it includes.

## Pre-requisites

We need to have NPM, Jest, React, and Babel installed

### NPM

Make sure you have the latest NPM with

```
$ npm install npm@latest -g
```

1. Create and navigate to a new directory for the project.
2. `$ npm init` (the defaults are OK _except_ for the `test command` question: enter `jest`)
3. `$ npm install --save-dev jest`
