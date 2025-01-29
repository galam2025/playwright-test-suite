
const { test, expect } = require('@playwright/test');
const { login } = require('./login.js');
const testData = require('./test-data.json');

async function ensureCorrectArea(page, expectedArea) {
    const headerLocator = page.locator("//h1[@class='text-xl font-semibold text-gray-900']");
    const currentArea = await headerLocator.innerText();

    if (currentArea.trim() === expectedArea.trim()) {
        console.log(`Already in the correct area: "${expectedArea}"`);
        return;
    }

    console.log(`Navigating to "${expectedArea}"...`);
    await page.click(`//button[contains(., '${expectedArea}')]`);
    await page.waitForLoadState('networkidle');
    await expect(headerLocator).toHaveText(expectedArea);
    console.log(`Successfully navigated to "${expectedArea}"`);
}

test.describe('Dynamic Test Suite', () => {
    testData.forEach(({ area, title, column, tags }) => {
        test(`Verify "${title}" in "${column}" column under "${area}"`, async ({ page }) => {
            await login(page);
            await ensureCorrectArea(page, area);

            const columnLocator = page.locator(`//div[h2[contains(text(), '${column}')]]`);
            await expect(columnLocator).toBeVisible();
            console.log(`Verified "${column}" column is visible.`);

            const taskLocator = columnLocator.locator(`//h3[contains(text(), '${title}')]`);
            await expect(taskLocator).toBeVisible();
            console.log(`Verified task "${title}" is in "${column}" column.`);

            for (const tag of tags) {
                const tagLocator = columnLocator.locator(`//span[contains(text(), '${tag}')]`);
                await expect(tagLocator).toBeVisible();
                console.log(`Verified tag "${tag}" is present.`);
            }
        });
    });
});
