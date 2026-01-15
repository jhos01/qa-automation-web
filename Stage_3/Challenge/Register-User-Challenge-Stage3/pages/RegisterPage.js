import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    /* =========================
       Locators
    ========================== */

    // Full Name
    this.txtFirstName = page.locator('input[placeholder="First Name"]');
    this.txtLastName = page.locator('input[placeholder="Last Name"]');

    // Address
    this.txtAddress = page.locator('textarea[ng-model="Adress"]');

    // Contact
    this.txtEmail = page.locator('//input[@type="email"]');
    this.txtPhone = page.locator('input[type="tel"]');

    // Gender & Hobbies
    this.rdbGenderMale = page.locator('input[value="Male"]');
    this.ckbHobby = page.locator('input[type="checkbox"]');

    // Languages
    this.ddlLanguages = page.locator('#msdd');

    // Skills
    this.ddlSkills = page.locator('#Skills');

    // Country (advanced select2)
    this.ddlCountrySelect2 = page.locator('.select2-selection');
    this.txtCountrySearch = page.locator('input[type="search"]');

    // Country (simple select)
   this.ddlCountry = page.locator('#countries');
    // Date of Birth
    this.sectionDateOfBirth = page
      .locator('.form-group')
      .filter({ hasText: 'Date of Birth' });
    this.ddlYear = this.sectionDateOfBirth.locator('#yearbox');
    this.ddlMonth = this.sectionDateOfBirth.locator('select[ng-model="monthbox"]');
    this.ddlDay = this.sectionDateOfBirth.locator('#daybox');

    // Password
    this.txtPassword = page.locator('#firstpassword');
    this.txtConfirmPassword = page.locator('#secondpassword');

    // Submit
    this.btnSubmit = page.locator('#submitbtn');
  }

  /* =========================
     Actions
  ========================== */

  async writerFullName(firstName, lastName) {
    await this.writer(this.txtFirstName, firstName);
    await this.writer(this.txtLastName, lastName);
  }

  async writerAddress(address) {
    await this.writer(this.txtAddress, address);
  }

  async writerContactInfo(email, phone) {
    await this.writer(this.txtEmail, email);
    await this.writer(this.txtPhone, phone);
  }

  async selectGenderMale() {
    await this.rdbGenderMale.check();
  }

  async selectLastHobby() {
    await this.ckbHobby.last().check();
  }

  /* =========================
       Assertions RegisterPage
    ========================== */


  async formIsSubmitted() {
    // Verifica que la URL contenga 'WebTable' después de enviar el formulario
    return await this.page.url().includes('WebTable');
  }

  async passwordsMatch() {
    const password = await this.txtPassword.inputValue();
    const confirmPassword = await this.txtConfirmPassword.inputValue();
    return password === confirmPassword;
  }
  async lastNameIsNotEmpty() {
    const lastName = await this.txtLastName.inputValue();
    return lastName !== '';
  };
  async isSubmitButtonNotVisible() {
    return await this.isVisible(this.btnSubmit);
  }
}