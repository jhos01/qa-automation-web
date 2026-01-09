import { test, expect } from '@playwright/test';

test.describe('Drag and Drop', () => {

  test('Basic Drag and Drop', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable');

    const source = page.locator('#draggable');
    const target = page.locator('#simpleDropContainer #droppable');

    await source.dragTo(target);
    await expect(target).toHaveText(/Dropped!/i);
  });

  test('Prevent Propogation', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable');

    await page.click('#droppableExample-tab-preventPropogation');

    const dragBtn = page.locator('#dragBox');
    const innerBox = page.locator('#notGreedyInnerDropBox');
    const outerBox = page.locator('#notGreedyDropBox');

    await dragBtn.dragTo(innerBox);
    await expect(innerBox).toHaveText(/Dropped!/i);
    await expect(outerBox).not.toHaveText(/Dropped!/i);
  });

});
