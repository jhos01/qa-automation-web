import test from '@playwright/test';
import users from '../data/users.json' assert { type: 'json' };

class LoginPage {

    constructor(page) {
        this.page = page;

        // Campos del login
        this.emailInput = page.locator('input[name="email"]').first();
        this.passwordInput = page.locator('input[name="password"]');
        // Botón Sign In
        this.SignInButton = page.getByRole('button', { name: 'SIGN IN' });
        //Link Create a new account
        this.createAccountLink = page.getByRole('link', { name: 'No account? Create one here' });
        
        // Texto que aparece tras login exitoso
        this.YourAccountHeading = page.getByRole('heading', { name: 'Your Account' });
    }

    // Abre la página real de login
    async navigate() {
        await this.page.goto('http://www.testingyes.com/onlineshop/login');
    }

    async login(user) {
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.SignInButton.click();
    }

    // Validación real del login
    async expectLoginSuccess() {
        await expect(this.YourAccountHeading).toBeVisible();
    }

}
export default LoginPage;

