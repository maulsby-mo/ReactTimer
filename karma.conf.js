// specifies how we want to run our tests
var webpackConfig = require('./webpack.config.js');
module.exports = function (config){
  config.set({
    browsers:['Chrome'], // browsers we want to use
    songleRun: true,
    frameworks: ['mocha'], // framework we want to use
    files: ['app/tests/**/*.test.jsx'], /// which test files to run
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // which preprocessors to use
    },
    reporters: ['mocha'], // what reporters we want to use (cleanup the output/ test results)
    client:{ // send details down to the individual frameworks
      mocha: {
          timeout:'5000' /// times out if test is not complete in 5 seconds
      }
    },
    webpack: webpackConfig, // use the webpack information in webpack.config.js
    webpackServer: {
      noInfo: true
    }
  });
};
