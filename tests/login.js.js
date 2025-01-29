const { expect } = require('@playwright/test');
const { BASE_URL, TEST_USERNAME, TEST_PASSWORD } = require('../config');

exports.login = async function (page) {
  console.log("Navigating to the login page...");
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  console.log("Waiting for login fields to be visible...");
  await page.waitForSelector('input[id="username"]', { timeout: 10000 });
  await page.waitForSelector('input[id="password"]', { timeout: 10000 });

  console.log("Entering credentials...");
  await page.fill('input[id="username"]', TEST_USERNAME);
  await page.fill('input[id="password"]', TEST_PASSWORD);

  console.log("Clicking the login button...");
  await page.click('button[type="submit"]');

  console.log("Waiting for navigation to complete...");
  await page.waitForLoadState('domcontentloaded'); 
  await page.waitForLoadState('networkidle'); 

  console.log("Checking if login was successful...");
  await expect(page).not.toHaveURL(BASE_URL); 

  console.log("Taking a screenshot of the dashboard...");
  await page.screenshot({ path: 'login-success.png' });

  console.log("Login successful!");
};
