import { expect } from '@playwright/test';

class RegisterPage {

    constructor(page) {
        this.page = page;

        // Campos reales del formulario (verificados en la web)
        this.firstName = page.locator('input[name = "firstname"]');
        this.lastName = page.locator('input[name = "lastname"]');
        this.email = page.locator('input[name = "email"]').first();
        this.password = page.getByRole('textbox', { name: 'At least 5 characters long' });
        this.birthDate = page.getByRole('textbox', { name: 'MM/DD/YYYY' });
        //Checkbox de "I agree to the terms.."
        this.IAgreeCheckbox = page.locator('input[name = "psgdpr"]');
        // Botón real de registro
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.signOutLink = page.getByRole('link', { name: 'Sign out' });
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
        await this.birthDate.fill(user.birthDate);
    }

    //Selecciona el checkbox de "I agree to the terms.."
    async agreeToTerms() {
        await this.IAgreeCheckbox.check();
    }

    // Hace click en el botón de registro
    async submit() {
        await this.SaveButton.click();
    }

    // Validación final
    async expectSuccess() {
        await expect(this.signOutLink).toBeVisible();
    }
}

export default RegisterPage;
