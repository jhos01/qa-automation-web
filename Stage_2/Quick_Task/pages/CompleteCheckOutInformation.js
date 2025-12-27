class CompleteCheckOutInformation {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('input[name="firstname"]');
        this.lastNameInput = page.locator('input[name="lastname"]');
        this.addressInput = page.locator('input[name="address1"]');
        this.cityInput = page.locator('input[name="city"]');
        this.stateOption = page.locator('select[name="id_state"]');
        this.postcodeInput = page.locator('input[name="postcode"]');
        this.countryOption = page.locator('select[name="id_country"]');
        this.proceedButton = page.getByRole('button', { name: 'CONTINUE' });
        this.shippingContinueButton = page.getByRole('button', { name: 'CONTINUE' });
        this.paymentOptionCheck = page.getByRole('radio', { name: 'Pay by Check' });
        this.paymentOptionWire = page.getByRole('radio', { name: 'Pay by bank wire' });
        this.termsCheckbox = page.locator('span[class = "custom-checkbox"]');
        this.OrderButton = page.getByRole('button', { name: 'ORDER WITH AN OBLIGATION TO PAY' });
    }
    //Completar seccion Adress
    async fillAddressForm(user) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateOption.selectOption({ label: user.state });
        await this.postcodeInput.fill(user.postcode);
        await this.countryOption.selectOption({ label: user.country });
        await this.proceedButton.click();
    }
    //Completar seccion Shipping method
    async completeShippingMethod() {
        await this.shippingContinueButton.click();
    }

    //Completar seccion Payment
    async selectPaymentMethod(method) {
        if (method === 'check') {
            await this.paymentOptionCheck.check();
        } else if (method === 'wire') {
            await this.paymentOptionWire.check();
        }
        await this.termsCheckbox.click();
        await this.OrderButton.click();
    }
}

export default CompleteCheckOutInformation;