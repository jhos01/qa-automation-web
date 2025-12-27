import { test, expect } from '@playwright/test';

test.describe('Feature: Hacer scroll a 1 pagina web', () => {

    test('Scenario 1: Aplicar scroll hasta un elemento', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html');
        //Hacer scroll hasta el final de la pagina web
        await test.step('Hacer scroll hasta el final de la pagina web', async () => {
            const paragraph = page.locator('p', {hasText: 'Eu integer bibendum'});
            await paragraph.scrollIntoViewIfNeeded();
            await expect(paragraph).toBeVisible();
        });
    });
    //Este es solo un ejemplo adicional de hacer scroll dentro de un contenedor pero no aplica a la pagina
    test('Scenario 3: Hacer scroll dentro de 1 contenedor', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html');
        //Hacer scroll dentro de un contenedor
        await test.step('Hacer scroll dentro de un contenedor', async () => {
        const container = page.locator('#container');
        const item = container.locator('div.item').nth(10);
        await item.scrollIntoViewIfNeeded();
        });
    });

});
