
import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores en la pagina Register', () => {

    test('Escenario: Validar que el user puede seleccionar el boton Register', async ({ page }) => {
        //Step 1: Abrir la pagina Register
        await test.step('Abrir la pagina Register', async () => {
            await page.goto('https://practice.expandtesting.com/register');
        });
        // Step 2: Validar que el user puede seleccionar el boton Register
        await test.step('Localizar el boton Register en la pagina', async () => {
            const registerButton = page.getByRole('button', { name: 'Register' });
            await expect(registerButton).toBeVisible();  
            await registerButton.click();      
        })
        
    })
    
})
