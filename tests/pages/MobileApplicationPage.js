
class MobileApplicationPage {
    constructor(page) {
        this.page = page;
        this.header = "//h1[@class='text-xl font-semibold text-gray-900']";
        this.mobileApplicationButton = "//button[contains(., 'Mobile Application')]";
    }

    async navigate() {
        await this.page.click(this.mobileApplicationButton);
        await this.page.waitForLoadState('networkidle');
    }

    async isDisplayed() {
        return this.page.locator(this.header).isVisible();
    }
}

module.exports = { MobileApplicationPage };
