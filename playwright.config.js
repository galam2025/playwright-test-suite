
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
