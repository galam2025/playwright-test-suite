
class WebApplicationPage {
    constructor(page) {
        this.page = page;
        this.header = "//h1[@class='text-xl font-semibold text-gray-900']";
    }

    async isDisplayed() {
        return this.page.locator(this.header).isVisible();
    }
}

module.exports = { WebApplicationPage };
