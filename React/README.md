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

# Test Basics

Test-driven react development using Jest looks something like this:

```js
describe("Appointment", () => {
  it("renders the customer first name", () => {
    expect(document.body.textContent).toContain("Ashley");
  });
});
```

Run your tests with `$ npm test`

- The test files go in a directory which is separate from the `src` directory, since our tests should not have a one-to-one relationship with our application structure (as that would tightly-couple the two).
- The `describe()` function defines a _test suite_, and the first argument is the name of the **unit** you are testing.
- The `it()` function is the preferred test method; there are equivalents with different names, but `it` reads best.
  - The first argument to `it()` should be a string which is a present-tense phrase that describes the behavior we expect, as this reads very nicely in the Jest test results (assuming the name of the suite is the name of the unit, as in the above example).
- The `toContain()` function is an example of a _matcher_, and you can and should write your own matchers that are specific to your project.
- In order for `document` to be defined as we expect, we need to use the `jsdom` **test environment** (a piece of code that performs setup and teardown before and after your test runs, respectively), which gives us a headless DOM we can access in the Node runtime for stuff like this. We install and setup `jsdom` in the project setup steps (9 and 10, to be exact).

# Defining what usage of your component will look like (get to red)

Since this is TDD, you write something like the following _before creating your component_.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
// `Appointment` is not the default export, which is intentional
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = {
      firstName: "Ashley",
    };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container); // appendChild isn't actually recommended
    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });
});
```

# Creating the component (get to green)

Create an empty file

```
$ mkdir src
$ touch src/Appointment.js
```

And then define an empty component in the new file to _do the smallest thing to fix the reported failure (in this case, the component being undefined)_:

```js
export const Appointment = () => {};
```

Then run your test to find the next thing to do:

```js
export const Appointment = () => "Ashley";
```

# Triangulate to remove hard coding

Triangulation is adding more specific tests, which requires more general production code, in a cycle. In this case, the first cycle would involve duplicating our test, but passing in (and then verifying) a different customer name.

Note (move this elsewhere): If you already have multiple tests and you want to work on one in isolation, we can skip a test by adding `.skip` like this:

```js
it.skip("renders another customer first name", () => {
```

To get both to pass, rewrite the component as:

```js
import React from "react";

export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;
```

# Refactor
