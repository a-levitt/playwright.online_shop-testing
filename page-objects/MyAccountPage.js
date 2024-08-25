export class MyAcountPage {
    constructor(page) {
        this.page = page;
    }

    visit = async () => {
        await this.page.goto("/en/my/profile/");
    }
}