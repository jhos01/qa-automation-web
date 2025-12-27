class SearchResultsPage {

    constructor(page) {
        this.page = page;

        // Selector dinámico por nombre de producto
        this.productPartialName = (partial) =>
            page.locator(`img[alt*="${partial}"]`);
    }

    async waitForResults() {
        await this.searchHeader.waitFor({ state: 'visible' });
    }

    async selectProduct(productName) {
        await this.productPartialName(productName).click();
        await this.page.waitForLoadState('networkidle');
    }
    /*
    async expectAtLeastOneResult() {
        await this.resultsCount.waitFor({ state: 'visible' });
        const text = await this.resultsCount.textContent();

        if (text.includes('0')) {
            throw new Error(`No se encontraron resultados en búsqueda`);
        }
    }
    */    
}

export default SearchResultsPage;
