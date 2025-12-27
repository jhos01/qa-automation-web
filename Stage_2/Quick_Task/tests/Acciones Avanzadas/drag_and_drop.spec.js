import { test, expect } from '@playwright/test';

test.describe('Feature: Drag and drop something', () => {
    test('Scenario:drag and drop a table into a empty field', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html');
        const panelElement = page.locator('div[class ="card ui-draggable ui-draggable-handle"]');
        const dropFieldElement = page.locator('div[class ="border border-primary rounded h-100"]');

        await panelElement.dragTo(dropFieldElement);
    })
    
    
})
