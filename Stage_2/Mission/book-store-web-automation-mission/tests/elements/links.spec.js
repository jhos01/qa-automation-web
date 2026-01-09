import { test, expect } from '@playwright/test';

test.describe('Interact with Links', () => {
  test('Open new tab and validate URL', async ({ page, context }) => {
    await page.goto('/links');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#simpleLink')
    ]);
    await expect(newPage).toHaveURL('https://demoqa.com/');
    await newPage.close();
  });
});
