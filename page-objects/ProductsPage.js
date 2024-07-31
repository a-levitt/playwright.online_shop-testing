import { expect } from "@playwright/test";

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.cartCount = page.locator("//span[@class='cart_count count']");
        this.addToCartButtons = page.getByRole('button').filter({ hasText: 'Add to cart' });
    }

    visit = async (link) => {
        await this.page.goto(link);
    }

    addProductToCart = async (index) => {
        await this.addToCartButtons.nth(index).waitFor();

        await this.addToCartButtons.nth(index).click();
    }

    expectCartCount = async (expectedAmount) => {
        await this.cartCount.waitFor();

        await expect(this.cartCount).toHaveText(expectedAmount);
    }
}