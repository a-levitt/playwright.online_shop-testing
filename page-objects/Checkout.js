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
        //await this.removeFromCartButtons.nth(smallestPriceIndex).waitFor();
        //await this.removeFromCartButtons.nth(smallestPriceIndex).click();

        await this.confirmRemoval.waitFor();
        await this.confirmRemoval.click();
    }

}