const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "salty-cypress-testrail-reporter",
  "reporterOptions": {
    "domain": "priz25.testrail.io",
    "username": "priyagopalakrishnann15@gmail.com",
    "password": "Aadhivadharva27@",
    "projectId": 5,
    "suiteId": 6,
    "createTestRun": true,
    // "runId": testRunNumber,
    // "runName": "Test Run Name"
  },
 e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
