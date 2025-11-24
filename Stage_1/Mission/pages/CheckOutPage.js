import expect from '@playwright/test';

class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Botones "Proceed to checkout" en cada paso
        this.summaryProceedBtn = page.locator('a.button.btn.btn-default.standard-checkout');
        this.addressProceedBtn = page.locator('button[name="processAddress"]');
        this.shippingProceedBtn = page.locator('button[name="processCarrier"]');

        // Checkbox de términos
        this.termsCheckbox = page.locator('#cgv');

        // Método de pago (bank wire)
        this.payByBankWire = page.locator('a.bankwire');

        // Botón final para confirmar pedido
        this.confirmOrderBtn = page.locator('#cart_navigation button[type="submit"]');

        // Mensaje final de éxito
        this.successMessage = page.locator('p.cheque-indent strong');
    }

    // PASO 1: Summary
    async proceedFromSummary() {
        await this.summaryProceedBtn.click();
    }

    // PASO 2: Address
    async proceedFromAddress() {
        await this.addressProceedBtn.click();
    }

    // PASO 3: Shipping
    async acceptTermsAndProceed() {
        await this.termsCheckbox.check();
        await this.shippingProceedBtn.click();
    }

    // PASO 4: Payment
    async choosePaymentMethod() {
        await this.payByBankWire.click();
    }

    // PASO 5: Confirm order
    async confirmOrder() {
        await this.confirmOrderBtn.click();
    }

    // Validación final
    async expectOrderSuccess() {
        await expect(this.successMessage).toContainText('complete');
    }
}

export default CheckoutPage;
