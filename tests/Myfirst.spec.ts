import {test,expect} from '@playwright/test';

test("has title",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
//    just to print onto console the title of the page
    // let tit: string=await page.title();
    // console.log(tit);
   await expect(page).toHaveTitle("Automation Testing Practice");



});
