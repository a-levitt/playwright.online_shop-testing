import { test } from "@playwright/test"

test("Promo page add to basket", async ({ page }) => {
   await page.goto("https://datika.me/en/category/laptopovi/laptop-racunari/");
   await page.getByRole('button').filter({ hasText: 'Add to cart' }).first().click();
   await page.pause();
});