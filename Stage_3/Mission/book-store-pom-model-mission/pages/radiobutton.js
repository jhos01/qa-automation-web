
import { expect } from "@playwright/test";
import { ElementsPage } from "./elements";
export class RadioButtonPage extends ElementsPage {
    // RadioButton page object model implementation
    constructor(page) {
        super(page);
    /* =========================
       Locators
    ========================== */
        this.yesRadioButton = page.locator('label[for="yesRadio"]');
        this.impressiveRadioButton = page.locator('label[for="impressiveRadio"]');
        this.noRadioButton = page.locator('label[for="noRadio"]');
        this.selectedMessage = page.locator('.text-success');
    };

    /* =========================
       Actions
    ========================== */
    async selectYes() {
        await this.yesRadioButton.click();
    };
    async selectImpressive() {
        await this.impressiveRadioButton.click();
    };
    async selectNo() {
        await this.noRadioButton.click();
    };
    /* =========================
       Assertions
    ========================== */
    async verifyYesMessageIsValid() {
        await expect(this.selectedMessage).toContainText('success')
    };
};