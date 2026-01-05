import { test, expect } from '@playwright/test';
test.describe('Feature: Interact with dynamic data', () => {
    test('Scenario: Load and verify dynamic data', async ({ page }) => {
        await test.step('Go to Dynamic Data Page', async () => {
            await page.goto('https://demo.automationtesting.in/DynamicData.html');
        });
        await test.step('Load dynamic data', async () => {
            const loadDataButton = page.getByRole('button', { name: 'Get Dynamic Data' });  
            await loadDataButton.click();
            const image = page.locator('img[src*="https://randomuser.me/api"]'); 
            await expect(image).toBeVisible();
            await page.close(); 
        });
    });
})
