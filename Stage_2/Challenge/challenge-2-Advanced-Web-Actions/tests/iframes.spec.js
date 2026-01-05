import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test.describe('Iframes anidados', () => {
    test('Scenario: Validar un Iframe anidado', async ({ page }) => {
        await test.step('Ingresar a la pagina', async () => {
            await page.goto('https://demo.automationtesting.in/Frames.html');
        })  
        await test.step('Hacer click en el enlace Iframe con in Iframe', async () => {
            const iframeWithInIframeLink = page.getByRole('link', { name: 'Iframe with in an Iframe' });
            await iframeWithInIframeLink.click();
        });
        await test.step('Completar textbox dentro el iframe anidado', async () => {
            const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');
            const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');
            await innerFrame.getByRole('textbox').fill('Testing Frames with Playwright');
            await expect(innerFrame.getByRole('textbox')).toHaveValue('Testing Frames with Playwright');
        });
        
    });
    
});
