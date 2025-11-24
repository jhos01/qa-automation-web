import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores de la pagina Locators', () => {
    test('Scenario: Validar que Contact link direcciona a Contact Page', async ({ page }) => {
        //Step 1: Abrir la pagina Locators
        await test.step('Abrir la pagina Locators', async () => {
            await page.goto('https://practice.expandtesting.com/locators');
        });
        // Step 2: Validar que Contact link direcciona a Contact Page
        await test.step('Localizar el link Contact y validar redireccion a Contact Page', async () => {
            const contactLink = page.getByRole('link', { name: 'Contact' });
            await expect(contactLink).toBeVisible();  
            await contactLink.click();
            await expect(page).toHaveURL('https://practice.expandtesting.com/contact');      
        })
        
    })
    
})
