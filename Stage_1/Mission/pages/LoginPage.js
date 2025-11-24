import { expect } from '@playwright/test';

class LoginPage {

    constructor(page) {
        this.page = page;

        // Campos del login (reales)
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#passwd');

        // Botón real de login
        this.loginBtn = page.locator('#SubmitLogin');

        // Texto que aparece tras login exitoso
        this.welcomeText = page.locator('.info-account');
    }

    // Abre la página real de login
    async navigate() {
        await this.page.goto('http://www.testingyes.com/onlineshop/login');
    }

    // Completa el login real
    async login(user) {
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.loginBtn.click();
    }

    // Validación real del login
    async expectLoginSuccess() {
        await expect(this.welcomeText).toBeVisible();
    }
}

export default LoginPage;
