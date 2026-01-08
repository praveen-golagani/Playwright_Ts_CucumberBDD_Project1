import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

const url = "https://webdriveruniversity.com";

Given('I navigate to webdriveruniversity homepage', async () => {
    //access url
    await pageFixture.page.goto(url);
});


When('I click on the contact us button', async () => {
    //await page.pause();
    const contactUs_Button = pageFixture.page.locator("//h1[text()='CONTACT US']");
    await contactUs_Button.click();

});

When('I click on login portal button',async()=>{
    const loginPortal_Button = pageFixture.page.locator('a#login-portal h1');
    await loginPortal_Button.click();
});


