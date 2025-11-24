
import {test, expect} from '@playwright/test';
test.describe('Feature: Validar localizadores en la pagina login', () => {

    test('Escenario 1: Validar que el user puede ver el link "here en la pagina', async ({ page }) => {

        //Step 1: Abrir la pagina login
        await test.step('Abrir la pagina login', async () => {
            await page.goto('https://practice.expandtesting.com/login');
        });
        // Step 2: Validar que el user puede ver el link "here en la pagina
        await test.step('Localizar el link "here en la pagina', async () => {
            const hereLink = page.getByRole('link', { name: 'here' });
            await expect(hereLink).toBeVisible();        
        })
        
    })

    test('Escenario 2: Validar que el user puede ver el campo Username', async ({ page }) => {
        //Step 1: Abrir la pagina login
        await test.step('Abrir la pagina login', async () => {
            await page.goto('https://practice.expandtesting.com/login');
        });
        // Step 2: Validar que el user puede ver el campo Username
        await test.step('Localizar el campo Username en la pagina', async () => {
            const usernameField = page.getByRole('textbox', { name: 'Username' });
            await expect(usernameField).toBeVisible();        
        })
        
    })

    test('Escenario 3: Validar que el user puede hacer click en el boton Login', async ({ page }) => {
        //Step 1: Abrir la pagina login
        await test.step('Abrir la pagina login', async () => {
            await page.goto('https://practice.expandtesting.com/login');
        });
        // Step 2: Validar que el user puede hacer click en el boton Login
        await test.step('Localizar el boton Login en la pagina', async () => {
            const loginButton = page.getByRole('button', { name: 'Login' });
            await expect(loginButton).toBeVisible();  
            await loginButton.click();      
        })
        
    })    
    
})
