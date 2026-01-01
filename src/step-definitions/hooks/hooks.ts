import { AfterAll, BeforeAll, Before } from "@cucumber/cucumber";
import { Browser, chromium } from "playwright/test";
import { pageFixture } from "./browserContextFixture";
//Runs before All scenarios
BeforeAll(async () => {
    console.log("\n Executing test suite..");
});

//Runs after All scenarios
AfterAll(async () => {
    console.log("\n Finished Executing test suite..");
});

Before(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    page = await context.newPage();
})