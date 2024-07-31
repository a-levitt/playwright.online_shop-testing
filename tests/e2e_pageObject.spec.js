import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage.js";

test("User full end-to-end purchase testing", async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.visit("/en/category/laptopovi/laptop-racunari/");

    await productsPage.expectCartCount("0");

    await productsPage.addProductToCart(0);
    await productsPage.expectCartCount("1");
    await page.waitForTimeout(1000);
    await productsPage.addProductToCart(1);
    await page.waitForTimeout(2000);
    await productsPage.addProductToCart(2);
    await productsPage.expectCartCount("3");

    await page.pause();
});