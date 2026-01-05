import { test } from '@playwright/test';

test.describe('Feature: popup and alert', () => {
    test('Scenario: Launch an alert dialog', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
        //await page.getByRole('button', { name: 'Launch alert' }).click();
        page.once('dialog', async (dialog) => {
            console.log('Dialog message type: ', dialog.type(), 'message: ', dialog.message());
            await dialog.accept();

        });
        await page.getByRole('button', { name: 'Launch alert' }).click()
        
    });

});

test.describe('Feature: popup and alert - confirm', () => {
    test('Scenario: Launch a confirm dialog', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
        page.once('dialog', async (dialog) => {
            console.log('Dialog message type: ', dialog.type(), 'message: ', dialog.message());
            await dialog.accept();
        });
        await page.getByRole('button', { name: 'Launch confirm' }).click();
    });

});

test.describe('Feature: popup and alert - prompt', () => {
    test('Scenario: Launch a prompt dialog', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
        page.once('dialog', async (dialog) => {
            console.log('Dialog message type: ', dialog.type(), 'message: ', dialog.message());
            await dialog.accept('Playwright prompt text');
        });
        await page.getByRole('button', { name: 'Launch prompt' }).click();
    });
});

test.describe('Feature: popup a modal', () => {
    test('Scenario: Launch a modal dialog', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
        await page.getByRole('button', { name: 'Launch modal' }).click();
        const modal = page.locator('.modal-dialog');
        await modal.getByRole('button', { name: 'Close' }).click();
    });
    
    
})

