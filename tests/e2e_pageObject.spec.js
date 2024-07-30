import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage";

test("User full end-to-end purchase testing", async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.visit("/en/category/laptopovi/laptop-racunari/");
});