import { test, expect } from '@playwright/test';
import 'dotenv/config'; // carga el .env automáticamente

test.describe('Book Store Flow', () => {

  test('Login, search, view book and logout', async ({ page }) => {

    // Obtener credenciales desde variables de entorno
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!username || !password) {
      throw new Error('Debes proveer USERNAME y PASSWORD como variables de entorno');
    }

    // 1) Navegar a la página de Login
    await page.goto('https://demoqa.com/login');

    // 2) Rellenar username y password
    await page.fill('#userName', username);
    await page.fill('#password', password);

    // 3) Hacer click en Login
    await page.click('#login');

    // 4) Validar login exitoso (navega a profile)
    await expect(page).toHaveURL('https://demoqa.com/profile');

    const profileTitle = page.locator('.main-header');
    await expect(profileTitle).toHaveText('Profile');

    // 5) Buscar un libro en la lista
    const searchKeyword = 'JavaScript';
    await page.fill('#searchBox', searchKeyword);

    // Validar que los resultados contengan la busqueda
    await expect(page.locator('.rt-tbody .rt-tr-group')).toContainText(searchKeyword);

    // 6) Clic en el libro para ir a la pagina de detalle
    const bookLink = page.locator('.rt-tbody .rt-tr-group').first().locator('a');
    const bookTitle = await bookLink.textContent();
    await bookLink.click();

    // Validar que la pagina cambio y muestra informacion del libro
    await expect(page.locator('#title-wrapper')).toBeVisible();
    await expect(page.locator('#title-wrapper')).toContainText(bookTitle.trim());

    // 7) Ir al perfil
    await page.click('button[id="addNewRecordButton"] >> nth=0').catch(() => {});
    await page.goto('https://demoqa.com/profile');

    // 8) Validar que el libro esta en perfil
    await expect(page.locator('.rt-tbody .rt-tr-group')).toContainText(bookTitle.trim());

    // 9) Logout
    await page.click('#submit');

    // Validar que volvemos a la pagina de login
    await expect(page).toHaveURL('https://demoqa.com/login');

  });

});
