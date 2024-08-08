export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator("//input[@title='First name']");
        this.lastNameField = page.locator("//input[@title='Last name']");
        this.emailField = page.locator("//input[@title='Email']");
        this.passwordField = page.locator("//input[@name='data[password]']");
        this.passwordConfirmField = page.locator("//input[@name='data[password_confirm]']");
        this.submitButton = page.locator("//input[@type='submit']");
    }

    fillRegisterFields = async() => {
        await this.firstNameField.waitFor();
        await this.firstNameField.fill("Artemis"); 
        await this.lastNameField.waitFor();
        await this.lastNameField.fill("Levitt");
        await this.emailField.waitFor();
        await this.emailField.fill("test_email_playwright@gmail.com"); 
        await this.passwordField.waitFor();
        await this.passwordField.fill("999password");
        await this.passwordConfirmField.waitFor();
        await this.passwordConfirmField.fill("999password");
        await this.page.pause();
        await this.submitButton.waitFor();
        //await this.submitButton.click();
    }
}