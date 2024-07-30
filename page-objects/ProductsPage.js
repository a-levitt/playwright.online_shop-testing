export class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    visit = async (link) => {
        await this.page.goto(link);
    }

    addProductToCart = async (index) => {
        const addToCartButtons =  this.page.getByRole('button').filter({ hasText: 'Add to cart' });
        await addToCartButtons.nth(index).waitFor();
        await addToCartButtons.nth(index).click();
    }
}