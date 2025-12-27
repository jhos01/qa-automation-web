
import { test } from '@playwright/test';

test.describe('Feature: Hacer doble click', () => {
   test('Scenario: Hacer doble click en un boton', async ({ page }) => {
         await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html');
        const doubleClickButton = page.getByRole('button', { name: 'Use double-click here' });
        // Realizar doble click en el botón
        await test.step('Hacer doble click', async () => {
            await doubleClickButton.dblclick();
        });
    
   });
    
});
