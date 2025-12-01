import test from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import RegisterPage from '../pages/RegisterPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckOutPage.js';
import LoginPage from '../pages/LoginPage.js';
import CompleteCheckOutInformation from '../pages/CompleteCheckOutInformation.js';
import users from '../data/users.json' assert { type: 'json' };
import SearchResultsPage from '../pages/SearchResultsPage.js';

test('Flujo completo: registro de usuario y compra exitosa', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);
    const searchResult  = new SearchResultsPage(page);
    const register = new RegisterPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const checkoutInfo = new CompleteCheckOutInformation(page);

    // 1. Ingresar a la página principal
    await home.goto();

    // 2. Seleccionar Sign In para crear cuenta
    await home.signInPage();

    //4. Seleccionar link Create a new account
    await login.createAccountLink.click();

    // 5. Registrar usuario nuevo
    await register.fillForm(users.validUser);
    await register.agreeToTerms();
    await register.submit();
    // 6. Verificar creación exitosa de cuenta
    await register.expectSuccess();

    // 7. Buscar un producto
    await searchResult.searchProduct('sweater');

    // 8. Seleccionar el producto buscado y agregarlo al carrito
    await searchResult.selectProduct('sweater');

    // 9. Seleccionar Add to Cart
    await product.addToCart();

    // 10. Seleccionar Proceed to checkout
    await cart.proceedToCheckOut();

    // 11. Seleccionar Proceed to checkout again 
    await checkout.proceedToCheckOut();

    // 12. Completar información de checkout
    await checkoutInfo.fillAddressForm(users.validUser);
    await checkoutInfo.fillShippingMethod();
    await checkoutInfo.fillPaymentMethod('wire');
});
