import { v4 as uuidv4 } from 'uuid';

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
        const emailGenerated = uuidv4() + "@playwrite.test"
        await this.emailField.waitFor();
        await this.emailField.fill(emailGenerated); 
        const passwordGenerated = uuidv4();
        console.warn("Generated password: " + passwordGenerated);
        await this.passwordField.waitFor();
        await this.passwordField.fill(passwordGenerated);
        await this.passwordConfirmField.waitFor();
        await this.passwordConfirmField.fill(passwordGenerated);
        await this.page.pause();
        await this.submitButton.waitFor();
        //await this.submitButton.click();
    }
}