import { test } from '@playwright/test';

test.describe('Feature: Realizar 1 mouse over sobre la barra de menus de una pagina web', () => {
    test('Scenario: Dada la pagina web de automation practice', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');
        const compasElement = page.locator('img.img-fluid[src="img/compass.png"]');
        const calendarElement = page.locator('img.img-fluid[src="img/calendar.png"]');
        const awardElement = page.locator('img.img-fluid[src="img/award.png"]');
        const landscapeElement = page.locator('img.img-fluid[src="img/landscape.png"]');

        // Realizar mouse over en cada imagen con un paso de prueba
        await test.step('Realizar mouse over en la imagen Compas', async () => {
            await compasElement.hover();
        });
        await test.step('Realizar mouse over en la imagen Calendar', async () => {
            await calendarElement.hover();
        });
        await test.step('Realizar mouse over en la imagen Award', async () => {
            await awardElement.hover();
        });
        await test.step('Realizar mouse over en la imagen Landscape', async () => {
            await landscapeElement.hover();
        });
    
    });
});
