import { Homepage } from "./homepage";
export class ElementsPage extends Homepage {
    // Elements page object model implementation
    constructor(page) {
        super(page);
    /* =========================
       Locators
    ========================== */
        this.textBoxOption = page.locator('.btn.btn-light').nth(0);
        this.checkBoxOption = page.locator('.btn.btn-light').nth(1);    
        this.radioButtonOption = page.locator('.btn.btn-light').nth(2);
        this.webTablesOption = page.locator('.btn.btn-light').nth(3);
        this.buttonsOption = page.locator('.btn.btn-light').nth(4);
        this.linksOption = page.locator('.btn.btn-light').nth(5);
        this.brokenLinksOption = page.locator('.btn.btn-light').nth(6);
        this.uploadAndDownloadOption = page.locator('.btn.btn-light').nth(7);
        this.dynamicPropertiesOption = page.locator('.btn.btn-light').nth(8);
    }
    /* =========================
       Actions
    ========================== */
    async navigateToTextBox() {
        await this.textBoxOption.click();
    }
    async navigateToCheckBox() {
        await this.checkBoxOption.click();
    }
    async navigateToRadioButton() {
        await this.radioButtonOption.click();
    }
    async navigateToWebTables() {
        await this.webTablesOption.click();
    }
    async navigateToButtons() {
        await this.buttonsOption.click();
    }
    async navigateToLinks() {
        await this.linksOption.click();
    }
    async navigateToBrokenLinks() {
        await this.brokenLinksOption.click();
    }
    async navigateToUploadAndDownload() {
        await this.uploadAndDownloadOption.click();
    }
    async navigateToDynamicProperties() {
        await this.dynamicPropertiesOption.click();
    }
}