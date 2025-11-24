class CartPage {

    constructor(page) {
        this.page = page;

        // Botón del modal tras agregar un producto al carrito
        this.modalCheckoutBtn = page.locator('#layer_cart a.btn[title="Proceed to checkout"]');

        // Botón "Proceed to checkout" en el carrito (summary)
        this.summaryCheckoutBtn = page.locator('a.button.btn.btn-default.standard-checkout');
    }

    // Desde el modal
    async proceedFromModal() {
        await this.modalCheckoutBtn.click();
    }

    // Desde la página del carrito (summary)
    async proceedFromSummary() {
        await this.summaryCheckoutBtn.click();
    }
}

export default CartPage;
