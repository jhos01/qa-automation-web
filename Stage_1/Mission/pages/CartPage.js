class CartPage {

    constructor(page) {
        this.page = page;

        // Botón del modal tras agregar un producto al carrito
        this.modalCheckoutButton = page.getByRole('link', { name: 'PROCEED TO CHECKOUT' });
    }

    // Desde el modal
    async proceedToCheckOut() {
        await this.modalCheckoutButton.click();
    }
}

export default CartPage;
