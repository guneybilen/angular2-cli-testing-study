// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
    // 'debug/app.debug.e2e.ts'
  ],

  /*multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }]*/

  // see below link for geckoDriver
  // https://github.com/angular/protractor/blob/master/lib/config.ts
  // after following:
  // npm install geckodriver --save-dev
  // set geckDriver like below:
  geckoDriver: "/home/guney/Desktop/tdd/tdd-chp6/node_modules/geckodriver/bin/geckodriver",

  capabilities: {
    'browserName': 'firefox'
    // phantomjs use is STRONGLY DISCOURAGED - read online.
  },

  

   //seleniumAddress: 'http://localhost:4444/wd/hub',

  // directConnect: true,

  // useAllAngular2AppRoots: true,

  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
