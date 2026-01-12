import { test, expect } from '@playwright/test'

test.describe('Validate form', () => {

  test('Validate button Submit is not enabled', async ({ page }) => {
    await page.goto('/automation-practice-form');
    const submitButton = page.locator('#submit');
    await expect(submitButton, 'Button is enabled').toBeDisabled();
    page.close();
  });

});

