import { test, expect } from '@playwright/test';
test.describe('Feature: Interact with Progress bar', () => {
    test('Scenario: Interact with Progress bar', async ({ page }) => {
        await test.step('Go to Progress bar Page', async () => {
            await page.goto('https://demo.automationtesting.in/ProgressBar.html');
        });
        await test.step('Interact with Progress bar', async () => {
            const progressBar = page.getByRole('button', { name: 'Download' });
            progressBar.click();
            await page.waitForTimeout(6000);
            await expect(page.locator('.progressbar-text')).toHaveText('100'); 
            await page.close();
        });
    });
})