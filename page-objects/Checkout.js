import { expect } from "@playwright/test";

export class Checkout {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator("//div[@class='wa-products']/div");
        this.cartProductsPrices = page.locator("//div[@class='wa-price-total js-product-full-price']");
        this.removeFromCartButtons = page.locator("//span[@data-title='Delete product from the cart']");
        this.confirmRemoval = page.getByRole('button', { name: 'Delete', exact: true });
    }

    removeCheapestProduct =  async() => {
        await this.cartItems.first().waitFor();
        const itemsBeforeRemoval = await this.cartItems.count();
        await this.cartProductsPrices.first().waitFor();
        const allPricesTexts = await this.cartProductsPrices.allInnerTexts();         
        //console.warn({allPricesTexts});
        const intPricesList = allPricesTexts.map((element) => {
            const currencySignReplaced = element.replace(" €", "");
            return parseInt(currencySignReplaced, 10);
        })
        //console.warn({intPricesList});
        
        const smallestPrice = Math.min(...intPricesList);
        const smallestPriceIndex = intPricesList.indexOf(smallestPrice);
        
        const cheapesItemDeleteButton = this.removeFromCartButtons.nth(smallestPriceIndex);
        await cheapesItemDeleteButton.waitFor();
        await cheapesItemDeleteButton.click();

        await this.confirmRemoval.waitFor();
        await this.confirmRemoval.click();

        await this.page.waitForTimeout(1000);

        const itemsAfterRemoval = await this.cartItems.count();
        //console.warn(itemsBeforeRemoval);
        //console.warn(itemsAfterRemoval);
        //await expect(itemsAfterRemoval).toHaveCount(itemsBeforeRemoval - 1);
        await expect(itemsAfterRemoval).toEqual(itemsBeforeRemoval - 1);
    }

}