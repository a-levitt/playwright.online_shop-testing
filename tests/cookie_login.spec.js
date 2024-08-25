import * as dotenv from "dotenv";
dotenv.config;

import { test } from "@playwright/test";
import { MyAcountPage } from "../page-objects/MyAccountPage.js";
//import { getLoinToken } from "../api-calls/getLoginToken.js";
//import { loginDetails } from "../data/userData.js"

test.only("Test cookie injection login", async ({ page }) => {
    const myAccount = new MyAcountPage(page);
    await myAccount.visit();

    //await getLoginToken(userData.login, userData.password);

    await page.evaluate(() => {
        document.cookie="auth_token=b36355542d5f2b74992290ea4b4d4e178a5";
    })
    await myAccount.visit();
    await page.pause();
});