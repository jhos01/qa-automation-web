class HomePage {

    constructor(page) {
        this.page = page;

        // Campo de búsqueda real de la web
        this.searchInput = page.getByPlaceholder('Search our catalog');

        // Botón de búsqueda real
        this.searchBtn = page.getByRole('button', { name: 'Search' });

        // Link real al login
        this.loginLink = page.locator('a.login');
    }

    async goto() {
        await this.page.goto('http://www.testingyes.com/onlineshop');
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async search(productName) {
        await this.searchInput.fill(productName);
        await this.searchBtn.click();
    }
}

export default HomePage;
