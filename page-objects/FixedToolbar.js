import { expect } from "@playwright/test";

export class FixedToolbar {
    constructor(page) {
        this.page = page;
        this.cartCount = page.locator("//span[@class='cart_count count']");
        this.orderCart = page.locator("//li[@id='ft_cart']");  //span[@class='item_title hidden-xs']
    }

    // expectCartCount = async (expectedAmount) => {
    //     await this.cartCount.waitFor();

    //     await expect(this.cartCount).toHaveText(expectedAmount);
    // }

    // for inner use in ProductPage.js
    getCartCount = async () => {
        await this.cartCount.waitFor();
        const text = await this.cartCount.innerText();
        return parseInt(text, 10); //radix (second argument) specifies number base
    }

    goToCheckout = async () => {
        const checkoutLink = this.orderCart;
        await checkoutLink.waitFor();
        await checkoutLink.click();

        await this.page.waitForURL("/en/order/");
    }
}