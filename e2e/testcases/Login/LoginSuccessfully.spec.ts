import {expect, test} from "@playwright/test"
import data from "../../data/loginData.json"
import {LoginPage} from "../../pages/LoginPage";

test("Login successfully by SignIn on HomePage link", async ({page,baseURL})=>{
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}customer/account/`);
    await loginPage.enterUserNamePassword(data.user1.name, data.user1.pass);
    await loginPage.signIn_Btn.click();
    //expect(page).toHaveURL(`${baseURL}customer/account/index/`);
})

test("Login successfully by SignIn on Customer Account link", async ({page,baseURL})=>{
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}customer/account/`);
    await loginPage.enterUserNamePassword(data.user1.name, data.user1.pass);
    await loginPage.signIn_Btn.click();
    await expect(page).toHaveURL(`${baseURL}customer/account/index/`);
})