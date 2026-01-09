import { test, expect } from '@playwright/test';

test.describe('Web Tables', () => {
  test('Add, edit and delete a record', async ({ page }) => {
    await page.goto('/webtables');

    await page.click('#addNewRecordButton');
    await page.fill('#firstName', 'Martina');
    await page.fill('#lastName', 'Doe');
    await page.fill('#userEmail', 'martina@example.com');
    await page.fill('#age', '30');
    await page.fill('#salary', '5000');
    await page.fill('#department', 'IT');
    await page.click('#submit');

    await expect(page.locator('div[role="row"]:has-text("martina@example.com")')).toBeVisible();

    await page.click('span[title="Edit"]');
    await page.fill('#salary', '7000');
    await page.click('#submit');

    await expect(page.locator('div[role="row"]:has-text("7000")')).toBeVisible();

    const deleteButtonforNewRow = page.locator('span[title="Delete"]').nth(3);
    await deleteButtonforNewRow.click();
    await expect(page.locator('div[role="row"]:has-text("martina@example.com")')).not.toBeVisible();
  });
});
