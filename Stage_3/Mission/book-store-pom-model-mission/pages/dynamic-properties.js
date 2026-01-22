import { ElementsPage } from "./elements";

export class DynamicPropertiesPage extends ElementsPage (){
    constructor(){
        super(page);
        /*=========================
            Locators
        ========================== */
        this.willEnable5SecondsButton = page.locator('#enableAfter');
        this.colorChangeButton = page.locator('#colorChange');
        this.visibleAfter5SecondsButton = page.locator('#visibleAfter');
    }
        /*=========================
            Actions
        ========================== */

        //There is no actions required on this page
        
        /*=========================
            Assertions
        ========================== */

        async verifyWillEnable5SecondsButtonisVisible(){
            await expect(this.willEnable5SecondsButton).toBeEnabled();
        }

        async verifyColorChangeButtonHasChangedColor() {
            await expect(this.colorChangeButton).toHaveClass(/text-danger/); // El boton cambia a clase text-danger
        }

        async verifyVisibleAfter5SecondsButtonIsVisible() {
            await expect(this.visibleAfter5SecondsButton).toBeVisible();
        }

}