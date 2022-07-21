const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  execTimeout: 70000,
  defaultCommandTimeout: 6000,
  viewportHeight: 780,
  viewportWidth: 1440,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://telnyx.com',
  },
})
