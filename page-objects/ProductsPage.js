import { expect } from "@playwright/test";
import { FixedToolbar } from "./FixedToolbar.js";

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButtons = page.getByRole('button').filter({ hasText: 'Add to cart' });
    }

    visit = async (link) => {
        await this.page.goto(link);
    }

    addProductToCart = async (index) => {
        const AddItemButton = this.addToCartButtons.nth(index);
        const fixedToolbar = new FixedToolbar(this.page)

        await AddItemButton.waitFor();
        const cartCountBeforeAdding = await fixedToolbar.getCartCount(); 
        await AddItemButton.click();
        await this.page.waitForTimeout(1000);
        const cartCountAfterAdding = await fixedToolbar.getCartCount();
        expect(cartCountAfterAdding).toBeGreaterThan(cartCountBeforeAdding);
    }
}