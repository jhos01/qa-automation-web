import { test } from '@playwright/test';
import { expect } from '@playwright/test';
test.describe('Feature:Ventanas y pestañas', () => {
    test('Validar 1 nueva ventana es abierta', async ({ page }) => {
        await test.step('Ir a la página', async () => {
            await page.goto('https://demo.automationtesting.in/Windows.html');
        });
        await test.step('Hacer click en el botón de nueva ventana', async () => {
            const [newWindow] = await Promise.all([
                page.waitForEvent('popup'),
                page.getByRole('button', { name: 'click' }).click(),
                
            ]);
            await newWindow.waitForLoadState();
            const title = await newWindow.title();
            expect(title).toContain('Selenium');
            await newWindow.close();
        });

    });
});
