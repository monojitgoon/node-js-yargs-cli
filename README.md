#  A  Node.js Command Line Interface with Yargs(with Unit testing in JEST) 

Sample Command Line Interface tool that calculates the amount of CarbonDioxide-equiponderant according to a given distance using a given transportation method

## Requirements

- [Node.js](http://nodejs.org/)

# Depenedencies

```sh
"jest": "^28.1.0",
"yargs": "^17.4.1"
```

#  Dependency Management Tool

- [NPM](https://www.npmjs.com/package/npm)


## Installation Steps (if applicable)

1. Extract repo

```sh
$ cd node-js-yargs-cli
```

2. Install the dependencies:

```sh
$ npm install
```

3. Install the module globally within the project directory

```sh
$ npm install -g
```

4. Run `npm start -- --transportation-method <string> --distance <number> --unit-of-distance <string> --output <string>`
   Example :

```sh
$ npm start -- --transportation-method diesel-car-medium --distance 15 --unit-of-distance km --output kg
```

Example with shortcuts :

```sh
$ npm start -- -t diesel-car-medium -d 15 -u km -o kg
```

## Test

To run test

```sh
$ npm test
```

To get the test coverage

```sh
$ npm run coverage
```

To watch all tests run

```sh
$ npm run test:watch
```