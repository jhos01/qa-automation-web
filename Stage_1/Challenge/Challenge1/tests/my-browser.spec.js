import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores de la pagina my-browser', () => {
    test('Scenario: Validar que el user puede ver la pagina Browser Information', async ({ page }) => {
        //Step 1: Abrir la pagina my-browser
        await test.step('Abrir la pagina my-browser', async () => {
            await page.goto('https://practice.expandtesting.com/my-browser');
        });
        // Step 2: Seleccionar el boton Show Browser Information
        await test.step('Localizar el boton Show Browser Information', async () => {
            const showBrowserInfoButton = page.getByRole('button', { name: 'Show Browser Information' });
            await expect(showBrowserInfoButton).toBeVisible();
            await showBrowserInfoButton.click();      
        })
        // Step 3: Validar que el user puede ver la pagina Browser Information
        await test.step('Validar que el user puede ver la pagina Browser Information', async () => {
            const browserInfoSection = page.locator('#browser-info');
            await expect(browserInfoSection).toBeVisible();
        })
    })
});

