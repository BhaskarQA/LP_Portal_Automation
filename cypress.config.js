const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 70000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    test_url: 'https://investorportal.qa.ace-alternatives.com',
    baseurl: 'https://api.investorportal.dev.ace-alternatives.com'
  },
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: 'https://investorportal.qa.ace-alternatives.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

