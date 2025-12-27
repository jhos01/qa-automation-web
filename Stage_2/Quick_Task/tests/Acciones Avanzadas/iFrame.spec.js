import { test, expect } from '@playwright/test';
test.describe('Scenario: Interactuar con elementos de un Iframe', () => {
    test('Feature: Use frameLocator to locate an element within Iframes', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        const frameLocator = page.frameLocator('iframe[src = MultipleFrames.html]');
        frameLocator.getByRole('heading', { name: '= iFrame Demo' })
        expect(frameLocator).not.toBeNull();

        
    })
    
    
})
