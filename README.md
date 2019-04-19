# javascript-unit-testing

This is a basic example of JavaScript unit testing with the following setup:
- Karma - test runner [https://karma-runner.github.io/latest/index.html]
- Mocha - test framework [https://mochajs.org/]
- Chai - test assertion library (the expect version) [https://www.chaijs.com]

Install Karma globally
```
npm install -g karma-cli
```

Install all of the npm dependencies
```
npm install
```

Run the tests!
- This will run ChromeHeadless and Safari browsers by default in continuous integration mode
```
npm test
```

To run different browsers, use this command and change the browsers argument
- This command will also do a single run and then quit (not continuous integration mode)
```
karma start --single-run --browsers ChromeHeadless karma.conf.js
```
