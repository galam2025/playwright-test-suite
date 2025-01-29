
const { expect } = require('@playwright/test');

exports.login = async function (page) {
  console.log("Navigating to the login page...");
  await page.goto('/', { waitUntil: 'networkidle' });

  console.log("Waiting for login fields to be visible...");
  await page.waitForSelector('input[id="username"]', { timeout: 10000 });
  await page.waitForSelector('input[id="password"]', { timeout: 10000 });

  console.log("Entering credentials...");
  await page.fill('input[id="username"]', 'admin');
  await page.fill('input[id="password"]', 'password123');

  console.log("Clicking the login button...");
  await page.click('button[type="submit"]');

  console.log("Waiting for navigation to complete...");
  await page.waitForLoadState('networkidle');

  console.log("Checking if login was successful...");
  await expect(page.locator("//h1[@class='text-xl font-semibold text-gray-900']")).toBeVisible();

  console.log("Login successful!");
};
