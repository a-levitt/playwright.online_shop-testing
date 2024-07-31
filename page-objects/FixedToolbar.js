import { expect } from "@playwright/test";

export class FixedToolbar {
    constructor(page) {
        this.page = page;
        this.cartCount = page.locator("//span[@class='cart_count count']");
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

}