
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[id="username"]';
        this.passwordInput = 'input[id="password"]';
        this.submitButton = 'button[type="submit"]';
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { LoginPage };
