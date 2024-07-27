import { test, expect } from "@playwright/test"

test("Promo page add to basket", async ({ page }) => {
   await page.goto("https://datika.me/en/category/laptopovi/laptop-racunari/");

   const cartCount = page.locator("//span[@class='cart_count count']");
   await expect(cartCount).toHaveText("0");

   const addToCartButton = await page.getByRole('button').filter({ hasText: 'Add to cart' }).first();
   addToCartButton.click();
   await expect(cartCount).toHaveText("1");

   // await page.pause();
});