
import { ElementsPage } from './elements'

export class CheckBoxPage extends ElementsPage {
    // CheckBox page object model implementation
    constructor(page) {
        super(page);
    /* =========================
       Locators
    ========================== */
        this.expandAllButton = page.locator('.rct-option.rct-option-expand-all');
        this.collapseAllButton = page.locator('.rct-option.rct-option-collapse-all');
        this.homeCheckBox = page.locator('label[for="tree-node-home"] .rct-checkbox');
        this.documentsCheckBox = page.locator('label[for="tree-node-documents"] .rct-checkbox');
        this.downloadsCheckBox = page.locator('label[for="tree-node-downloads"] .rct-checkbox');
        this.desktopCheckBox = page.locator('label[for="tree-node-desktop"] .rct-checkbox');

    };
    /* =========================
       Actions
    ========================== */
    async clickExpandAll() {
        await this.expandAllButton.click();
    };
    async checkHome() {
        await this.homeCheckBox.click();
    };

    async checkDocuments() {
        await this.documentsCheckBox.click();
    };
    async checkDownloads() {
        await this.downloadsCheckBox.click();
    };
    async checkDesktop() {
        await this.desktopCheckBox.click();
    }

    /* =========================
       Assertions
    ========================== */
    async isHomeChecked() {
        return this.homeCheckBox.locator('svg').getAttribute('class').then(cls => cls.includes('rct-icon-check'));
    };
    async isDocumentsChecked() {
        return this.documentsCheckBox.locator('svg').getAttribute('class').then(cls => cls.includes('rct-icon-check'));
    };
    async isDownloadsChecked() {
        return this.downloadsCheckBox.locator('svg').getAttribute('class').then(cls => cls.includes('rct-icon-check'));
    };
    async isDesktopChecked() {
        return this.desktopCheckBox.locator('svg').getAttribute('class').then(cls => cls.includes('rct-icon-check'));
    }


}