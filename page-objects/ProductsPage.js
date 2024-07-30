export class ProductsPage {
    constructor(page) {
        this.page = page;

        this.addToCartButtons = page.getByRole('button').filter({ hasText: 'Add to cart' });
    }

    visit = async (link) => {
        await this.page.goto(link);
    }

    addProductToCart = async (index) => {
        await this.addToCartButtons.nth(index).waitFor();
        await this.addToCartButtons.nth(index).click();
    }
}