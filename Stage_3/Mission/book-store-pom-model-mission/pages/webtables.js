import { ElementsPage } from "./elements";

export class WebsTablePage extends ElementsPage {
    constructor (page) {
        super(page);
        this.firstnameField  = page.locator('#firstName');
        this.lastnameField = page.locator('#lastname');
        this.userEmailField = page.locator('#userEmail');
        this.ageField = page.locator('#age');
        this.salaryField = page.locator("#salary");
        this.departmentField = page.locator('#department');
        this.submitButton = page.locator('#submit')
        this.deleteButtonforNewRow = page.locator('span[title="Delete"]').nth(3);

    }
    /* =========================
       Actions
    ========================== */

    async addNewrowInformation(firstname,lastname,email,age,salary,department){
        await this.firstnameField.fill(firstname);
        await this.lastnameField.fill(lastname);
        await this.userEmailField.fill(email);
        await this.ageField.fill(age);
        await this.salaryField.fill(salary);
        await this.departmentField.fill(department)
        await this.submitButton.click
    };
    async selectDeleteButtonforNewRow(){
        await this.deleteButtonforNewRow.click
    };
    /* =========================
       Assertions
    ========================== */
    async verifyRowisRemoved(email){
        await expect(`div[role="row"]:has-text("${email}")`).not.toBeVisible();
    }


    


} 