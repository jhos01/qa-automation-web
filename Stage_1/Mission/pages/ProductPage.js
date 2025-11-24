class ProductPage {

    constructor(page) {
        this.page = page;

        // Selector de un producto en la lista (por nombre real)
        this.productByName = (name) =>
            page.locator(`a.product-name[title="${name}"]`);

        // Botón "Add to cart" en la página del producto
        this.addToCartBtn = page.locator('button.exclusive');

        // Ventana  que aparece tras agregar al carrito
        this.cartModal = page.locator('#layer_cart');

        // Botón para ir al carrito
        this.proceedToCheckoutBtn = page.locator('a.btn[href*="controller=order"]');
    }

    // Selecciona un producto desde la lista
    async selectProduct(productName) {
        await this.productByName(productName).click();
    }

    // Agrega el producto al carrito desde el detalle
    async addToCart() {
        await this.addToCartBtn.click();
    }

    // Continúa al carrito desde el modal
    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }
}

export default ProductPage;
