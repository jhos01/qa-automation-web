import { test, expect } from '@playwright/test';

test.describe('Feature: simular teclas de 1 calculadora', () => {
    
    test('Scenario: Sumar 2 numeros simulando usar teclas fisicas al usar la calculadora', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/slow-calculator.html');
        //Usar simuladores de teclado para seleccionar las teclas de la calculadora
            await page.keyboard.press('2');
            await page.keyboard.press('+');
            await page.keyboard.press('3');
            await page.keyboard.press('=');
            
        //Agregar espera de 5 segundos para ver el resultado
        await page.waitForTimeout(6000);   
    });
});
