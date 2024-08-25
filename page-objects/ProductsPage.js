import { expect } from "@playwright/test";
import { FixedToolbar } from "./FixedToolbar.js";
import { isDesktopViewport } from "../utils/Viewports.js"


export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButtons = page.getByRole('button').filter({ hasText: 'Add to cart' });
        //this.sortButton = page.getByRole('button', { name: 'Price' });
        this.sortButton = page.locator("//button[@id='sort_dropdown']");
        this.sortMethod = page.getByRole('link', { name: 'Name' });
        this.itemTitle = page.locator("//span[@itemprop='name']"); 
        this.checkboxFilerScreen = page.getByLabel('17.3"');
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

    sortByName = async () => {
        const SortButton = await this.sortButton;
        await SortButton.waitFor();
        await SortButton.click();

        await this.itemTitle.first().waitFor();
        const titlesListBeforeSorting = await this.itemTitle.allInnerTexts();

        const SortMethod = await this.sortMethod;
        await SortMethod.waitFor();
        await SortMethod.click();

        const titlesListAfterSorting = await this.itemTitle.allInnerTexts();

        expect(titlesListAfterSorting).not.toEqual(titlesListBeforeSorting);
        expect(SortButton).toHaveText("Name");
    }


    filterScreenSize = async () => {
        // desktop viewport only
        if (isDesktopViewport(this.page)) {
            await this.checkboxFilerScreen.waitFor();
            await this.checkboxFilerScreen.click();
            await this.page.waitForURL(/\/en\/category\/laptopovi\/laptop-racunari\//);
            //"?veli_ina_ekrana2[]=1794")
        }
    }
}