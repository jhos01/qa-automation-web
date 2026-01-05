import { test, expect } from '@playwright/test';

test.describe('Feature: Interact with Modals', () => {
    test('Scenario: Open and close different types of modals', async ({ page }) => {
        await test.step('Go to Modals Page', async () => {
            await page.goto('https://demo.automationtesting.in/Modals.html');
        });
        await test.step('Interact with BootstrapModal', async () => {
            const bootstrapModalButton = page.getByRole('link', { name: 'Launch modal' }).first()
            await bootstrapModalButton.click();
            const closeBootstrapModalButton = page.getByRole('button', { name: 'Close' }).first();
            await closeBootstrapModalButton.click();
        });
    });
    test('Scenario: Open and close Multiple Modal', async ({ page }) => {
        await test.step('Go to Modals Page', async () => {
            await page.goto('https://demo.automationtesting.in/Modals.html');
        });
        await test.step('Interact with Multiple Modal', async () => {
            const multipleModalButton = page.getByRole('link', { name: 'Launch modal' }).nth(1);
            await multipleModalButton.click();
            await expect(page.getByRole('heading', { name: 'First Modal' })).toBeVisible();
            const launchModalInsideModalButton = page.getByRole('link', { name: 'Launch modal' }).nth(2);
            await launchModalInsideModalButton.click();
            const closeInnerModalButton = page.getByRole('link', { name: 'Close' }).nth(1);
            await closeInnerModalButton.click();
            const closeOuterModalButton = page.getByRole('link', { name: 'Close' }).first();
            await closeOuterModalButton.click();
            await page.close();
        });
    });
});