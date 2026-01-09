import { test, expect } from '@playwright/test';

test.describe('Validate Resizable Interactions', () => {

  test('Resize box to larger size', async ({ page }) => {
    await page.goto('https://demoqa.com/resizable');

    const box = page.locator('#resizableBoxWithRestriction');
    const handle = box.locator('span[style*="resizable-handle"]');

    const initialBox = await box.boundingBox();

    if (initialBox) {
      await page.mouse.move(initialBox.x + initialBox.width - 5, initialBox.y + initialBox.height - 5);
      await page.mouse.down();
      await page.mouse.move(initialBox.x + initialBox.width + 50, initialBox.y + initialBox.height + 50);
      await page.mouse.up();
    }

    const finalBox = await box.boundingBox();

    await expect(finalBox.width).toBeGreaterThan(initialBox.width);
    await expect(finalBox.height).toBeGreaterThan(initialBox.height);
  });

  test('Resize limited box does not exceed boundary', async ({ page }) => {
    const box = page.locator('#resizable');
    const handle = box.locator('span[style*="resizable-handle"]');

    const initialBox = await box.boundingBox();
    if (initialBox) {
      await page.mouse.move(initialBox.x + initialBox.width - 5, initialBox.y + initialBox.height - 5);
      await page.mouse.down();
      await page.mouse.move(initialBox.x + initialBox.width + 500, initialBox.y + initialBox.height + 500);
      await page.mouse.up();
    }

    const finalBox = await box.boundingBox();

    await expect(finalBox.width).toBeLessThanOrEqual(initialBox.width + 100);
  });

});
