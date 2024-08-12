import { expect } from "@playwright/test";

export class Shipping {
    constructor(page) {
        this.page = page;
    
        this.firstName = page.locator('input[name="auth\\[data\\]\\[firstname\\]"]');
        this.lastName = page.locator('input[name="auth\\[data\\]\\[lastname\\]"]');
        this.phone = page.locator('input[name="auth\\[data\\]\\[phone\\]"]');
        this.email = page.locator('input[name="auth\\[data\\]\\[email\\]"]');
        this.checkboxPolicy = page.getByLabel('Agree with Private policy: datika.me/o-nama');
        this.comboCity = page.locator('select[name="region\\[region\\]"]');
        //this.comboPG = page.locator("//option[@value='PG']").nth(1);
        //this.comboPG = page.getByRole("option", { class: "selected" });
        this.address = page.locator('input[name="region\\[city\\]"]');
        this.comboShipping = page.getByText('Select a shipping option');
        this.comboShipOption = page.getByText('Podgorica, Donja Gorica,');

        this.paymentMethod = page.locator('div').filter({ hasText: /^ONLINEVISA, Mastercard, Maestro, American Express$/ }).first();
        this.buttonConfirm = page.getByRole("button", { name : 'Confirm order'});
    }

    fillRemainFields = async(emailGenerated) => {
        await this.firstName.waitFor();
        //const actualName = await this.firstName; 
        //expect(actualName).toEqual("Artemis");
        await this.firstName.fill("Artemii");
        await this.lastName.waitFor();
        //const actualFamilyname = await this.lastName; 
        //expect(actualFamilyname).toEqual("Levitt");
        await this.lastName.fill("Levitt");
        await this.phone.waitFor();
        await this.phone.fill("+3 (826) 777-66-55");
        await this.email.waitFor();
        //const actualEmail = await this.email; 
        //expect(actualEmail).toEqual(emailGenerated);
        await this.email.fill("alevitt@playwright.test");
        await this.checkboxPolicy.waitFor();
        await this.checkboxPolicy.click();
        await this.comboCity.waitFor();
        await this.comboCity.click();
        await this.page.pause();
        //await this.comboPG.waitFor();
        //await this.comboPG.click();
        await this.address.waitFor();
        await this.address.fill("13. jula 19");
        await this.page.keyboard.press('Enter');

        await this.comboShipping.waitFor();
        await this.comboShipping.click();
        await this.comboShipOption.waitFor();
        await this.comboShipOption.click();
    };
    
    confirmOrder = async() => {
        await this.paymentMethod.waitFor();
        await this.paymentMethod.click();
        await this.buttonConfirm.waitFor();
        //await this.buttonConfirm.click();
        console.warn("You paid the order!");
    };
}