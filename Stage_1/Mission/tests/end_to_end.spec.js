import { test } from '@playwright/test';

import HomePage from '../pages/HomePage.js';
import RegisterPage from '../pages/RegisterPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckOutPage.js';

import users from '../data/users.json' assert { type: 'json' };

test('Flujo completo: registro de usuario y compra exitosa', async ({ page }) => {

    const home = new HomePage(page);
    const register = new RegisterPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // 1. Entrar al home
    await home.goto();

    // 2. Ir a login y luego a crear cuenta
    await home.goToLogin();
    await register.navigate(); // URL con create_account=1

    // 3. Registrar usuario nuevo
    await register.register(users.validUser);

    // 4. Verificar creación exitosa de cuenta
    await register.expectSuccess();

    // 5. Buscar un producto
    await home.search('dress');

    // 6. Seleccionar un producto exacto
    await product.selectProduct('Printed Dress');

    // 7. Agregar al carrito
    await product.addToCart();

    // 8. Continuar desde el modal
    await cart.proceedFromModal();

    // 9. Continuar desde el resumen del carrito (summary)
    await cart.proceedFromSummary();

    // 10. Continuar desde la página de dirección (address)
    await checkout.proceedFromAddress();

    // 11. Aceptar términos y continuar desde envío (shipping)
    await checkout.acceptTermsAndProceed();

    // 12. Seleccionar método de pago
    await checkout.choosePaymentMethod();

    // 13. Confirmar la orden
    await checkout.confirmOrder();

    // 14. Validar mensaje final de éxito
    await checkout.expectOrderSuccess();
});
