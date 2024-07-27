import { test } from "@playwright/test"

test("Promo page add to basket", async ({ page }) => {
   await page.goto("https://datika.me/en/category/laptopovi/laptop-racunari/");
   await page.locator('form').filter({ hasText: '276 € Add to cart Lenovo' }).getByRole('button').click();
   await page.pause();
});