import path from 'path';

export class UploadAndDownloadPage extends Elements (){
    constructor(){
        super(page);
        /*=========================
            Locators
        ========================== */
        this.chooseFileButton = page.locator('#uploadFile');  
        this.downloadButton = page.locator('#downloadButton');
        this.uploadedFilePathMessage = page.locator('#uploadedFilePath')
    }
        /*=========================
            Actions
        ========================== */

        async uploadFile(){
            const filePath = path.resolve('fixtures/sample.txt');
            await this.chooseFileButton.setInputFiles(filePath);
            return filePath;
        }

        async downloadFile(){
            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.downloadButton.click(),
            ])
            const downloadPath = path.resolve('downloads','sample-downloaded.txt')
            await download.saveAs(downloadPath);
            return downloadPath;
        }
         /*=========================
            Assertions
        ========================== */
        
        async verifyUploadedFilePath(filePath){
            const fileName = path.basename(filePath);
            await expect(this.uploadedFilePathMessage).toContainText(fileName);

        }

        async verifyDownloadedFilePath(downloadPath){
            const fileExists = fs.existsSync(downloadPath);
            expect(fileExists).toBe(true)
        }

}