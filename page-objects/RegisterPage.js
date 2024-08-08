export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: 'First name'});
        this.lastNameField = page.getByRole('textbox', { name: 'Last name'});
        this.emailField = page.getByRole('textbox', { name: 'Email', exact: true});
        this.passwordField = page.locator("//input[@name='data[password]']");
        this.passwordConfirmField = page.locator("//input[@name='data[password_confirm]']");
        this.submitButton = page.getByRole('button', { name: 'Sign Up'});
    }

    fillRegisterFields = async(emailGenerated, passwordGenerated) => {

        await this.firstNameField.waitFor();
        await this.firstNameField.fill("Artemis"); 
        await this.lastNameField.waitFor();
        await this.lastNameField.fill("Levitt");
        await this.emailField.waitFor();
        await this.emailField.fill(emailGenerated); 
        await this.passwordField.waitFor();
        await this.passwordField.fill(passwordGenerated);
        await this.passwordConfirmField.waitFor();
        await this.passwordConfirmField.fill(passwordGenerated);
        await this.page.pause();
        await this.submitButton.waitFor();
        //await this.submitButton.click();
    }
}