
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator("//a[@data-type='signup']");
    }

    goToSignup = async() => {
        await this.signUpLink.waitFor();
        await this.signUpLink.click();
        this.page.waitForURL("/en/signup/");
    }
}
