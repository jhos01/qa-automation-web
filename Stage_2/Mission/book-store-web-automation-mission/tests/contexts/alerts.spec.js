import { test, expect } from '@playwright/test';

test.describe('Alerts Handling', () => {

  test('Handle alerts, confirm and prompt', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    // ALERT
    page.once('dialog', dialog => dialog.accept());
    await page.click('#alertButton');

    // CONFIRM
    page.once('dialog', dialog => dialog.accept());
    await page.click('#confirmButton');

    // PROMPT
    const inputText = 'PlaywrightTest';
    page.once('dialog', dialog => dialog.accept(inputText));
    await page.click('#promtButton');

    await expect(page.locator('#promptResult')).toContainText(inputText);
  });

});
