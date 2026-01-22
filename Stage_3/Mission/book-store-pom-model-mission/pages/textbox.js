import { ElementsPage } from "./elements";

export class TextBoxPage extends ElementsPage {
    // TextBox page object model implementation
    constructor(page) {
        super(page);
    /* =========================
       Locators
    ========================== */
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.idName = page.locator('#name');
        this.idEmail = page.locator('#email')
        this.idCurrentAddress = page.locator('#currentAddress')
        this.idPermanentAddress = page.locator('#permanentAddress')
    }

    /* =========================
       Actions
    ========================== */
    async enterFullName(fullName) {
        await this.fullNameInput.fill(fullName);
    }
    async enterEmail(email) {
        await this.emailInput.fill(email);
    }
    async enterCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
    }
    async enterPermanentAddress(address) {
        await this.permanentAddressInput.fill(address);
    }
    async clickSubmit() {
        await this.submitButton.click();
    }

    /* =========================
       Assertions
    ========================== */
    async verifyNameIsDisplayed(name) {
        await expect(this.idName).toContaintText(name);
    }
    async verifyEmailIsDisplayed(){
        await expect(this.idEmail).toContaintText(email);
    }
    async verifyCurrentAddressIsDisplayed(currentAddress){
        await expect(this.idCurrentAddress).toContaintText(currentAddress);
    }
    async verifyPermanentAddressIsDisplayed(permanentAddress){
        await expect(this.idPermanentAddress).toContaintText(permanentAddress)
    }
}