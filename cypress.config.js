const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Реалізуйте прослуховувачі подій Node, якщо це необхідно
    },
    screenshotOnRunFailure: true, // Робити скріншоти при помилках тестів
    screenshotsFolder: 'cypress/screenshots', // Директорія для збереження скріншотів
  },
});
