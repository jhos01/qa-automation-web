class HomePage {

    constructor(page) {
        this.page = page;

        // Campo de búsqueda: Search our catalog
        this.searchInput = page.getByRole('textbox', { name: 'Search' });

        // Botón de búsqueda: lupa
        this.searchButton = page.locator('button[type="submit"]');

        // Link al Sign in
        this.signIn = page.locator('a[title="Log in to your customer account"]');
    }

    async goto() {
        await this.page.goto('http://www.testingyes.com/onlineshop');
    }

    async signInPage() {
        await this.signIn.click();
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }    

}

export default HomePage;
