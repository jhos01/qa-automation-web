class ProductPage {

    constructor(page) {
        this.page = page;

        // Botón "Add to cart" en la página del producto
        this.addToCartBtn = page.locator('button[type = "submit"][class*= "add-to-cart"]');

        // Modal  que aparece tras agregar al carrito
        this.cartModal = page.locator('#layer_cart');
    }

    // Agrega el producto al carrito desde el detalle
    async addToCart() {
        await this.addToCartBtn.click();
        await this.cartModal.waitFor({ state: 'visible' });

    }
}

export default ProductPage;
