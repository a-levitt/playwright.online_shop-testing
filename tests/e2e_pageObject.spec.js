import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage.js";
import { FixedToolbar } from "../page-objects/FixedToolbar.js";

test("User full end-to-end purchase testing", async ({ page }) => {

    const productsPage = new ProductsPage(page);
    //const fixedToolbar = new FixedToolbar(page);

    await productsPage.visit("/en/category/laptopovi/laptop-racunari/");

    //await fixedToolbar.expectCartCount("0");

    await productsPage.addProductToCart(0);
    //await fixedToolbar.expectCartCount("1");

    await productsPage.addProductToCart(1);

    await productsPage.addProductToCart(2);
    //await fixedToolbar.expectCartCount("3");

    await page.pause();
});