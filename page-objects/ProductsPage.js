export class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    visit = async (link) => {
        await this.page.goto(link);
    }
}