import * as dotenv from "dotenv";
dotenv.config();

import { test } from "@playwright/test";
import { MyAcountPage } from "../page-objects/MyAccountPage.js";
//import { getLoinToken } from "../api-calls/getLoginToken.js";
//import { loginDetails } from "../data/userData.js"

test.skip("Test cookie injection login", async ({ page }) => {
    const myAccount = new MyAcountPage(page);
    await myAccount.visit();

    //await getLoginToken(userData.login, userData.password);

    await page.evaluate(() => {
        document.cookie="auth_token=" + process.env.AUTH_TOKEN;
    })
    await myAccount.visit();
    await page.pause();
});

test.only("Test cookie injection login and mocking network request", async ({ page }) => {

    await page.route("**/en/my/profile/", async (route, request) => {
        await route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({message: "PLAYWRIGHT ERROR FROM MOCKING"})
        });
    });

    const myAccount = new MyAcountPage(page);
    await myAccount.visit();

    //await getLoginToken(userData.login, userData.password);

    await page.evaluate(() => {
        document.cookie="auth_token=" + process.env.AUTH_TOKEN;
    })
    await myAccount.visit();
    await page.pause();
});