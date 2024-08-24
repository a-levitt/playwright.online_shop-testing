import { test } from "@playwright/test"
import { MyAcountPage } from "../page-objects/MyAccountPage.js";

test.only("Test cookie injection login", async ({ page }) => {
    const myAccount = new MyAcountPage(page);
    await myAccount.visit();
});