# quiz-master
Quizzing application to test how much a student knows.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Only [node.js](https://nodejs.org/en/download/) and npm or yarn are required for working on the software.

### Installing
To get started, install the dependencies in `package.json` by running the following command

```
npm install
```

## Available scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console (both browser and terminal)

### `npm test`
Launches the test runner in the interactive watch mode.
**Note: `CI=true` is set so that the test suite is run only once**

### `npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`
This project is bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app) and hence to eject from the single build configuration, use this command.
**Note: this is a one-way operation. Once you eject, you can’t go back!**

### `npm run precommit`
**Note: you'll never have to run this script as `husky` will run this for you on the precommit git hook**

## Dependencies

- [react](https://reactjs.org/): A javascript UI library
- [reactDOM](https://www.npmjs.com/package/react-dom): Used to render React to the DOM
- [react-scripts](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/package.json): Provided with create-react-app and wraps a lot of dependencies. Dependencies that are used often will be discussed below
  - [babel](https://babeljs.io/): Transpiler for transpiling modern JS and JSX to plain-old JS.
  - [dotenv](https://github.com/motdotla/dotenv): Storing environment variables in a secure .env file.
  - [eslint](https://eslint.org/): A linting utility for JS and JSX (**The lint output is shown on the console upon `npm start`**)
  - [jest](https://facebook.github.io/jest/): Testing platform for javascript software
  - [webpack](https://webpack.js.org/): Bundler and preprocessor for the project
- [husky](https://github.com/typicode/husky#husky---): Utility to run scripts from git hooks
- [lint-staged](https://github.com/okonet/lint-staged): Enables running scripts on staged git files (**This does not work with staged hunks**) 
- [prettier](https://prettier.io/): An opinionated code formatter

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/alivenotions/pidpod/blob/master/LICENSE) file for details