import { test, expect } from '@playwright/test';

test.describe('Buttons', () => {
  test('Validate click types', async ({ page }) => {
    await page.goto('buttons');

    await page.dblclick('#doubleClickBtn');
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

    await page.click('#rightClickBtn', { button: 'right' });
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

    //const dynamicBtn = page.locator('button:has-text("Click Me")').nth(1);
    const dynamicBtn = page.locator('button', { hasText: 'Click Me' }).nth(2);
    await dynamicBtn.click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
  });
});
