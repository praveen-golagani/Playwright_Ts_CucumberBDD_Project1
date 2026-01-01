import { Given, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let browser: Browser; //browser instance
let context: any; //browser context for sep browser session
let page: Page; //webpage within context

const url = "https://webdriveruniversity.com";

Given('I navigate to webdriveruniversity homepage', async () => {
    //setup browser instance
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    page = await context.newPage();
    //access url
    await page.goto(url);
});


When('I click on the contact us button', async () => {
    //await page.pause();
    const contactUs_Button = page.locator("//h1[text()='CONTACT US']");
    await contactUs_Button.click();

});

When('I switch to the new browser tab', async () => {
    page = await context.waitForEvent("page"); // reinitialize the page as per new tab opened
    await page.bringToFront();
});


