import { test } from "@playwright/test";
import { MyAcountPage } from "../page-objects/MyAccountPage.js";
import { getLoinToken } from "../api-calls/getLoginToken.js";

test.only("Test cookie injection login", async ({ page }) => {
    const loginToken = await getLoinToken();
    console.warn({loginToken});
    
    const myAccount = new MyAcountPage(page);
    await myAccount.visit();
});