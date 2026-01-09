import { test, expect } from '@playwright/test';

test.describe('Windows, Tabs & Frames', () => {

  test('Handle new tab', async ({ page, context }) => {
    await page.goto('https://demoqa.com/browser-windows');

    const [newTab] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#tabButton')
    ]);

    await expect(newTab).toHaveURL('https://demoqa.com/');
    await newTab.close();
  });

  test('Handle new window', async ({ page, context }) => {
    await page.goto('https://demoqa.com/browser-windows');

    const [newWin] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#windowButton')
    ]);

    await expect(newWin).toHaveURL('https://demoqa.com/');
    await newWin.close();
  });

  test('Simple iFrame', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');
    await expect(page.frameLocator('#frame1').locator('h1')).toHaveText('This is a sample page');
  });

  test('Nested iFrames', async ({ page }) => {
    await page.goto('https://demoqa.com/nestedframes');

    const parentFrame = page.frameLocator('iframe[srcdoc]');
    const childFrame = parentFrame.frameLocator('iframe');

    await expect(childFrame.locator('body')).toContainText('Child Iframe');
  });

});
