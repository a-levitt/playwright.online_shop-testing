import { test } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage.js";
import { FixedToolbar } from "../page-objects/FixedToolbar.js";
import { Checkout } from "../page-objects/Checkout.js";
import { LoginPage } from "../page-objects/LoginPage.js";
import { RegisterPage } from "../page-objects/RegisterPage.js";

test("User full end-to-end purchase testing", async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const fixedToolbar = new FixedToolbar(page);
    const checkout = new Checkout(page);
    const login = new LoginPage(page);
    const registration = new RegisterPage(page);

    // await productsPage.visit("/en/category/laptopovi/laptop-racunari/");

    // //await fixedToolbar.expectCartCount("0");

    // await productsPage.filterScreenSize();

    // await productsPage.sortByName();

    // await productsPage.addProductToCart(0);
    // //await fixedToolbar.expectCartCount("1");

    // await productsPage.addProductToCart(1);

    // await productsPage.addProductToCart(2);
    // //await fixedToolbar.expectCartCount("3");

    // fixedToolbar.goToCheckout();

    // await checkout.removeCheapestProduct();

    await productsPage.visit("/en/login/");
    await login.goToSignup();

    await registration.fillRegisterFields();

    //await page.pause();
});