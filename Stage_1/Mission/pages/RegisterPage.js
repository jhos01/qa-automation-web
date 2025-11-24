import { expect } from '@playwright/test';

class RegisterPage {

    constructor(page) {
        this.page = page;

        // Campos reales del formulario (verificados en la web)
        this.firstName = page.locator('#customer_firstname');
        this.lastName = page.locator('#customer_lastname');
        this.email = page.locator('#email');
        this.password = page.locator('#passwd');

        // Botón real de registro
        this.registerBtn = page.locator('button[name="submitAccount"]');

        // Mensaje real de éxito
        this.confirmMessage = page.locator('.info-account');
    }

    // Abre la página real de registro
    async navigate() {
        await this.page.goto('http://www.testingyes.com/onlineshop/login?create_account=1');
    }

    // Completa el formulario usando el usuario del JSON
    async fillForm(user) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.password.fill(user.password);
    }

    // Hace click en el botón de registro
    async submit() {
        await this.registerBtn.click();
    }

    // Flujo completo
    async register(user) {
        await this.fillForm(user);
        await this.submit();
    }

    // Validación final
    async expectSuccess() {
        await expect(this.confirmMessage).toBeVisible();
    }
}

export default RegisterPage;
