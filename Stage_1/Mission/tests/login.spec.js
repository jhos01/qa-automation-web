import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Login de usuario registrado', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // 1. Ir al login
    await loginPage.navigate();

    // 2. Ingresar credenciales
    await loginPage.login(users.validUser);

    // 3. Validar éxito
    await loginPage.expectLoginSuccess();
});
