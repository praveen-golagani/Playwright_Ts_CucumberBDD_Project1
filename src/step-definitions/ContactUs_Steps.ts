import { When } from "@cucumber/cucumber";


When('I type a first name',async()=>{
    await page.locator("//input[@name='first_name']").fill("Praveen");
});

When('I type a last name',async()=>{
    await page.locator("//input[@name='last_name']").fill("QA");
});