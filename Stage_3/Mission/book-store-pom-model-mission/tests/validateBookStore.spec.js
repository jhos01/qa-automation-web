import { test, expect } from '@playwright/test';
import {LoginBookStorePage} from '../pages/login-bookstore';
import { BookStorePage } from '../pages/BookStorePage';
import { ProfileBookStorePage } from '../pages/ProfileBookStorePage.js';
import 'dotenv/config';

test.describe('Book Store App Flow', () => {
  let loginPage, bookStorePage, profilePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginBookStorePage(page);
    bookStorePage = new BookStorePage(page);
    profilePage = new ProfileBookStorePage(page);
  });

  test('Login, search book, view details, validate in profile, and logout', async () => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!username || !password) {
      throw new Error('Faltan USERNAME o PASSWORD en el archivo .env');
    }

    const searchKeyword = 'JavaScript';

    // Login
    await test.step('Login', async () => {
      await loginPage.navigate();
      await loginPage.login(username, password);
      await profilePage.verifyLoginSuccessful();
    });

    // Buscar libro
    await test.step('Buscar libro', async () => {
      await bookStorePage.navigate();
      await bookStorePage.searchBook(searchKeyword);
      await bookStorePage.verifySearchResultsContain(searchKeyword);
    });

    // Ir a detalles
    const bookTitle = await test.step('Abrir detalles del libro', async () => {
      return await bookStorePage.openFirstBookFromResults();
    });

    // Validar detalles
    await test.step('Validar detalle del libro', async () => {
      await profilePage.verifyBookDetails(bookTitle);
    });

    // Ir al perfil
    await test.step('Ir al perfil y validar libro', async () => {
      await profilePage.returnToProfile();
      await profilePage.verifyBookInList(bookTitle);
    });

    // Logout
    await test.step('Logout', async () => {
      await loginPage.logout();
      await expect(loginPage.page).toHaveURL('https://demoqa.com/login');
    });
  });
});
