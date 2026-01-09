import { test, expect } from '@playwright/test';

test.describe('Interact with Radio Button', () => {
  test('Select and validate radio button messages', async ({ page }) => {
    await page.goto('/radio-button');

    await page.click('label[for="yesRadio"]');
    await expect(page.locator('.text-success')).toHaveText('Yes');

    await page.click('label[for="impressiveRadio"]');
    await expect(page.locator('.text-success')).toHaveText('Impressive');

    await expect(page.locator('#noRadio')).toBeDisabled();
  });
});
