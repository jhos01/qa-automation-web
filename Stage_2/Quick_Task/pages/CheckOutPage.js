import expect from '@playwright/test';

class CheckoutPage {

    constructor(page) {
        this.page = page;

        //Buscar Proceed to checkout buttons
        this.proceedToCheckOutButton = page.getByRole('link', { name: 'PROCEED TO CHECKOUT'});
    }

    // Seleccionar boton Proceed to checkout
    async proceedToCheckOut() {
        await this.proceedToCheckOutButton.click();
    }
  
}

export default CheckoutPage;
