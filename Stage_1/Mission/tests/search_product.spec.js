import { test } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';

test('Buscar un producto desde home', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // 1. Entrar al home
    await homePage.goto();

    // 2. Buscar un producto
    await homePage.search('dress');

    // 3. Seleccionar el producto encontrado
    await productPage.selectProduct('Printed Dress');
});
