import { hasUncaughtExceptionCaptureCallback } from "node:process";
import { ElementsPage } from "./elements";

export class ButtonsPage extends ElementsPage{
    constructor(){
        super(page);
        /* =========================
           Locators
        ========================== */
        this.doubleClickButton = page.locator('#doubleClickBtn');
        this.rightClickButton = page.locator('#rightClickMessage');
        this.clickMeButton = page.getByRole('button', { hasText: 'Click Me' }).nth(2);
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.clickMeMessage = page.locator('#dynamicClickMessage');
    }

        /* =========================
            Actions
        ========================== */

    async selectDoubleClickButton (){
        await this.doubleClickButton.dblClick();
    };

    async selectRightClick(){
        await this.rightClickButton.click({button:'right'});
    };

    async selectClickMeButton(){
        await this.selectClickMeButton.click();
    };

        /* =========================
                Assertions
        ========================== */

    async verifydoubleClickMessageIsValid(){
        await expect(this.doubleClickMessage).toContainText('You have done a double click');
    };

    async verifyRightClickMessageIsValid(){
        await expect(this.rightClickMessage).toContainText('You have done a right click');
    };

    async verifyClickMeMessageIsValid(){
        await expect(this.clickMeMessage).toContainText('You have done a dynamic click')
    };
}
