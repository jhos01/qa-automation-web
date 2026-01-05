import { test, expect } from '@playwright/test';

test.describe('Feature: Interact with loader', () => {
    test('Scenario: Wait for loader to disappear and verify content', async ({ page }) => {
        await test.step('Go to Loader Page', async () => {
            await page.goto('https://demo.automationtesting.in/Loader.html');
        }); 
    });    test.step('Wait for loader to disappear', async () => {
            const runButton = page.getByRole('button', { name: 'Run' });
            await runButton.click();
            const loaderMessage = page.getByRole('heading', { name: 'Please wait...' });
            await expect(loaderMessage).toBeVisible();
            await loaderMessage.waitFor({ state: 'hidden', timeout: 10000 }); 
        });
});
