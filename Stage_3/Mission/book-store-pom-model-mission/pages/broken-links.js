import { ElementsPage } from "./elements";

export class BrokenLinksPage extends ElementsPage(){
    constructor(){
        super(page);
        /*=========================
            Locators
        ========================== */
        this.validImage = page.locator('img[src*="Toolsqa.jpg"]').nth(0);
        this.brokenImage = page.locator('img[src*="Toolsqa_1.jpg"]');
        this.validLink = page.locator('a[href="https://demoqa.com"]');
        const brokenLinkUrl = 'http://the-internet.herokuapp.com/status_codes/500'
    }
        /*=========================
            Actions
        ========================== */
    async selectValidImage(){
        const validImageLoaded = this.validImage.evaluate((img) => {
            return img.complete && img.naturalWidth > 0;
        });
        return validImageLoaded;
    }

    async selectBrokenImage (){
        const brokenImageLoaded = await brokenImage.evaluate((img) => {
            return img.complete && img.naturalWidth > 0;
        });
        return brokenImageLoaded;
    }

    async clickValidLink(){
        const [newPage] = await Promise.all([
            this.validLink.click()
        ])
        await newPage.waitForLoadState
        return newPage;
    }

    async clickBrokenLink(){
        const response = await request.get(brokenLinkUrl)
        return response;
    }

        /*=========================
            Assertions
        ========================== */
    async verifyValidImageisLoaded(validImageLoaded){
        await expect(validImageLoaded).toBe(true)
    }

    async verifybrokenImageisNotLoaded(brokenImageLoaded){
        await expect(brokenImageLoaded).toBe(false)
    }

    async verifyvalidLinkLoadsNewPage(){
        await expect(newPage).toHaveUrl('https://demoqa.com/');
    }

    async verifyBrokenLinkIsNotWoring(response){
        await expect(response.status()).toBeGreaterThanOrEqual(400);
    }

}