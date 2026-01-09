import { test, expect } from '@playwright/test';

test('Validación de imágenes y enlaces - Broken Page', async ({ page, request }) => {
    await test.step('Navigate to the page', async () => {
        await page.goto('/broken');
    })

    await test.step('Validate valid image', async () => {
        const validImage = page.locator('img[src*="Toolsqa.jpg"]').nth(0);
        const validImageLoaded = await validImage.evaluate((img) => {
            return img.complete && img.naturalWidth > 0;
        });
        expect(validImageLoaded).toBe(true);
        });
        
    await test.step('Validate brokenImage', async () => {
        const brokenImage = page.locator('img[src*="Toolsqa_1.jpg"]');
        const brokenImageLoaded = await brokenImage.evaluate((img) => {
            return img.complete && img.naturalWidth > 0;
        });
        expect(brokenImageLoaded).toBe(false);
    })
    
    await test.step('Validate valid link', async () => {
        const validLink = page.locator('a[href="https://demoqa.com"]');
        await Promise.all([
            page.waitForNavigation(),
            validLink.click()
        ]);
        await expect(page).toHaveURL('https://demoqa.com/');
        await page.goto('https://demoqa.com/broken');

        
    })
    await test.step('Validate broken link', async () => {
        const brokenLinkUrl = 'http://the-internet.herokuapp.com/status_codes/500';
        const response = await request.get(brokenLinkUrl);
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });

        
});
    

  
