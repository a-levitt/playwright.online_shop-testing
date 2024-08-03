export class Checkout {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator("//div[@class='wa-products']/div");
        this.cartProductsPrices = page.locator("//div[@class='wa-price-total js-product-full-price']");
        this.removeFromCartButtons = page.locator("//div[@data-title='Delete product from the cart']");
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
        console.warn({intPricesList});
    }

}