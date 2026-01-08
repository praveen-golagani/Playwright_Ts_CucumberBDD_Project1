import { Then, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
let alertText: string;

When('I enter a username {string}', async (userName: string) => {
    await pageFixture.page.getByPlaceholder('Username').fill(userName);
})

When('I enter a password {string}', async (password: string) => {
    await pageFixture.page.locator('input#password').fill(password);
})

When('I click on the login button',async()=>{
    
    //Event listeners must be registered BEFORE the event occurs
     pageFixture.page.on('dialog',async(alert)=>{
        alertText = alert.message();
        await pageFixture.page.waitForTimeout(2000);
        await alert.accept();
    })
    await pageFixture.page.locator('button#login-button').click();
});

Then('I should be present with an alert with that contains text {string}', async (status: string) => {
    expect(alertText).toBe(status);
});