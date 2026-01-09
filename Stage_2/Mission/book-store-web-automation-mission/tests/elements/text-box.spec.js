import { test, expect } from '@playwright/test';

test.describe('Interact with a set of Text Box', () => {
  test('Fill and submit the form Text Box', async ({ page }) => {
    await page.goto(`/text-box`);

    await page.fill('#userName', 'Test User');
    await page.fill('#userEmail', 'testuser@example.com');
    await page.fill('#currentAddress', 'Current Addr');
    await page.fill('#permanentAddress', 'Permanent Addr');

    await page.click('#submit');

    await expect(page.locator('#output #name')).toHaveText('Name:Test User');
    await expect(page.locator('#output #email')).toHaveText('Email:testuser@example.com');
  });
});
