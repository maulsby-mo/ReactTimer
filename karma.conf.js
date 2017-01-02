var webpackConfig = require('./webpack.config.js');
module.exports = function (config){
  config.set({
    browsers:['Chrome'],
    songleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client:{
      mocha: {
          timeout:'5000' /// times out if test is not complete in 5 seconds
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
