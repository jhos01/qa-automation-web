import { test, expect } from '@playwright/test';

test.describe('Modal Dialogs', () => {

  test('Open and close small modal', async ({ page }) => {
    await page.goto('https://demoqa.com/modal-dialogs');

    await page.click('#showSmallModal');
    await expect(page.locator('.modal-content')).toBeVisible();

    await page.click('#closeSmallModal');
    await expect(page.locator('.modal-content')).toBeHidden();
  });

  test('Open and close large modal', async ({ page }) => {
    await page.goto('https://demoqa.com/modal-dialogs');

    await page.click('#showLargeModal');
    await expect(page.locator('.modal-content')).toBeVisible();

    await page.click('#closeLargeModal');
    await expect(page.locator('.modal-content')).toBeHidden();
  });

});
