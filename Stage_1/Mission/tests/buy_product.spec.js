import { test } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';

test('Agregar un producto al carrito', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // 1. Entrar al home
    await homePage.goto();

    // 2. Buscar un producto
    await homePage.search('dress');

    // 3. Seleccionar el producto encontrado
    await productPage.selectProduct('Printed Dress');

    // 4. Añadir al carrito
    await productPage.addToCart();

    // 5. Continuar desde el modal
    await cartPage.proceedFromModal();
});
