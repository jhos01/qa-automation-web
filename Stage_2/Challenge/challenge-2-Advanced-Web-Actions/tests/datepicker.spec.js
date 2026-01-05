import { test, expect } from '@playwright/test';

test.describe('Feature: Interact with a datepicker', () => {
    test('Scenario: Select a date from the datepicker', async ({ page }) => {
        await test.step('Go to Datepicker Page', async () => {
            await page.goto('https://demo.automationtesting.in/Datepicker.html');
        });
        await test.step('Open the datepicker', async () => {
            const dateInput = page.locator('#datepicker2');
            await dateInput.click();
        });
        await test.step('Select a month', async () => {
            const selectedMonth = 'March';
            await page.locator('.datepick-month-year[title = "Change the month"]').selectOption({ value: '11/2026' });
        });
        await test.step('Select a year', async () => {
            const selectedYear = '2026';
            await page.locator('.datepick-month-year[title = "Change the year"]').selectOption({ value: '11/2021' });
        });
        await test.step('Select a day', async () => {
            const selectedDay = '15';
            const dayToSelect = page.getByRole('link', { name: selectedDay });
            await dayToSelect.click();
        });
        await test.step('Validate the selected date is in the input field', async () => {
            const dateInput = page.locator('#datepicker2');
            await expect(dateInput).toHaveValue('11/15/2021');
            page.close();
        });
    });
});