import { test, expect } from '@playwright/test';

test.describe('Selectable Interactions', () => {

  test('Select an item in list', async ({ page }) => {
    await page.goto('https://demoqa.com/selectable');
    
    const item3 = page.locator('.vertical-list-container .list-group-item').nth(2);
    await item3.click();
    await expect(item3).toHaveClass(/active/);
  });

  test('Select multiple in grid', async ({ page }) => {
    await page.click('#demo-tab-grid');
    
    const item1 = page.locator('#demo-tabpane-grid .list-group-item').nth(0);
    const item3 = page.locator('#demo-tabpane-grid .list-group-item').nth(2);
    const item5 = page.locator('#demo-tabpane-grid .list-group-item').nth(4);

    await item1.click();
    await item3.click();
    await item5.click();

    await expect(item1).toHaveClass(/active/);
    await expect(item3).toHaveClass(/active/);
    await expect(item5).toHaveClass(/active/);
  });

});
