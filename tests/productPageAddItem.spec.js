import { test, expect } from "@playwright/test"

test("Promo page add to basket", async ({ page }) => {
   await page.goto("/en/category/laptopovi/laptop-racunari/");


   const cartCount = page.locator("//span[@class='cart_count count']");
   await cartCount.waitFor();
   await expect(cartCount).toHaveText("0");

   const addToCartButton = await page.getByRole('button').filter({ hasText: 'Add to cart' }).first();
   await addToCartButton.waitFor();
   await addToCartButton.click();
   await expect(cartCount).toHaveText("1");

   const orderCart = page.locator("//a[@id='cart']");
   await orderCart.click();

   //await page.pause();
});