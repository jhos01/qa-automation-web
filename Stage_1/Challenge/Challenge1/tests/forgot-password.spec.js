
import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores en la pagina forgot-password', () => {
    test('Escenario: Validar que el user puede recuperar acceso a la pagina a traves de su email', async ({ page }) => {
        //Step 1: Abrir la pagina forgot-password
        await test.step('Abrir la pagina forgot-password', async () => {
            await page.goto('https://practice.expandtesting.com/forgot-password');
        });
        // Step 2: Validar que el user puede introducir 1 email
        await test.step('Localizar el campo Email en la pagina', async () => {
            const emailField = page.getByRole('textbox', { name: 'E-mail' });
            await expect(emailField).toBeVisible();  
            await emailField.fill('example@email.com')
        })

        // Step 3: Validar que el user puede hacer click en el boton Retrieve password
        await test.step('Localizar el boton Retrieve password en la pagina', async () => {
            const retrievePasswordButton = page.getByRole('button', { name: 'Retrieve password' });
            await expect(retrievePasswordButton).toBeVisible();  
            await retrievePasswordButton.click();      
        })
    })

});
