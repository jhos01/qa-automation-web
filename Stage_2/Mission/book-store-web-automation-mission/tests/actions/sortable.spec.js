import { test, expect } from '@playwright/test';

test.describe('Sortable Interactions', () => {

  test('Reorder items vertically', async ({ page }) => {
    await page.goto('https://demoqa.com/sortable');

    const item1 = page.locator('#demo-tabpane-list .list-group-item').nth(0);
    const item4 = page.locator('#demo-tabpane-list .list-group-item').nth(3);

    // Mover Item 4 al top
    const box1 = await item1.boundingBox();
    const box4 = await item4.boundingBox();

    if (box1 && box4) {
      await page.mouse.move(box4.x + box4.width/2, box4.y + box4.height/2);
      await page.mouse.down();
      await page.mouse.move(box1.x + box1.width/2, box1.y + box1.height/2);
      await page.mouse.up();
    }

    await expect(page.locator('#demo-tabpane-list .list-group-item').nth(0)).toHaveText('Item 4');
  });

  test('Reorder items in Grid', async ({ page }) => {
    await page.click('#demo-tab-grid-tab');
    
    const first = page.locator('#demo-tabpane-grid .list-group-item').nth(0);
    const last = page.locator('#demo-tabpane-grid .list-group-item').nth(8);

    const start = await first.boundingBox();
    const end = await last.boundingBox();

    if (start && end) {
      await page.mouse.move(start.x + start.width/2, start.y + start.height/2);
      await page.mouse.down();
      await page.mouse.move(end.x + end.width/2, end.y + end.height/2);
      await page.mouse.up();
    }

    await expect(page.locator('#demo-tabpane-grid .list-group-item').nth(8)).toHaveText('Item 1');
  });

});
