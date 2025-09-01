const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     screenshotOnRunFailure: true, // default: true
     video: true,                  // default: true

    supportFile: "cypress/support/e2e.js",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
});
