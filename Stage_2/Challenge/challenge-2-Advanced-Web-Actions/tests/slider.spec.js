import { test, expect } from '@playwright/test';
test.describe('Feature: Interact with an slider', () => {
    test('Scenario: Move the slider to a specific value', async ({ page }) => {
        await test.step('Go to Slider Page', async () => {
            await page.goto('https://demo.automationtesting.in/Slider.html');
        });
        await test.step('Move the slider to the right', async () => {
            const sliderHandle = page.locator('.ui-slider-handle');
            await sliderHandle.hover();
            await page.mouse.down();
            await page.mouse.move(600, 0);
            await page.close();
        });
    });
});