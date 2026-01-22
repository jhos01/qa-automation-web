import { ElementsPage } from "./elements";

export class LinksPage extends ElementsPage(){
    constructor(){
        super(page);
        /*=========================
            Locators
        ========================== */
        this.homeLink = page.locator('#simpleLink');
    }
        /*=========================
            Actions
        ========================== */

    async clickHomeLink (){
        const [newPage] = await Promise.all([
            isContext.waitForEvent('page'),
            this.homeLink.click()  
        ])
        await newPage.waitForLoadState();
        return newPage
    }
        /*=========================
            Assertions
        ========================== */

    async verifyHomeLinkOpensNewPage(newPage){
        await expect(newPage).toHaveURL('https://demoqa.com/');
    }

    


}