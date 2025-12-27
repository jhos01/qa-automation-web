import { test, expect } from '@playwright/test';

test.describe('Feature: Open a new window', () => {
    test('Scenario: Click on a button and wait for new window that will be opened', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Windows.html');
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);
        await newPage.waitForLoadState();
     
    });
    /*
        const pagePromise = page.waitForEvent('page');
        await page.getByRole('button', { name: 'click' }).click();  
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        console.log(await newPage.title());
        */
    
});
