/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).




*/

import {test, expect, Locator} from '@playwright/test';

test("Locators", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

  //  const logo:Locator =   page.getByAltText("nop commerce demo store");

  //1. By placeholder
    await page.getByPlaceholder("Enter Name").fill("Akash");
    await page.getByPlaceholder("email").fill("akash.demo@gmail.com");

    //2. by Text

    let text : Locator = page.getByText("Data Entry Form");
    await expect(text).toBeVisible();

    //3. By Roles

   // await page.getByRole('link',{name:"Home"}).first().click();

    // 4. label


    //  await page.getByLabel("Phone",{exact:false}).fill("1234567890");
    //  await page.getByLabel("Address",{exact:false}).fill("Pune Maharashtra");
// 1. Target the input field next to the "Phone:" label
await page.locator('label:has-text("Phone:") + input').fill('1234567890');

// 2. Target the textarea field next to the "Address:" label
await page.locator('label:has-text("Address:") + textarea').fill('Pune Maharashtra');





})
