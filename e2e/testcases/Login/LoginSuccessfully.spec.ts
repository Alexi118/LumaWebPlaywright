import { expect, test, Page } from '@playwright/test';
import data from "../../data/loginData.json"
import {LoginPage} from "../../pages/LoginPage";
import { beforeEach } from "node:test";

test.beforeEach("visit Login page directly",async (page, baseURL) => {
    await page.goto(`${baseURL}/customer/account/login`);
})

test("Login successfully by SignIn on HomePage link", async ({page,baseURL})=>{
    const loginPage = new LoginPage(page)
    await loginPage.enterUserNamePassword(data.user1.name, data.user1.pass);
    await loginPage.signIn_Btn.click();
    await expect(page).toHaveURL(`${baseURL}customer/account/index/`);
})

test("Login successfully by SignIn on Customer Account link", async ({page,baseURL})=>{
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}customer/account/`);
    await loginPage.enterUserNamePassword(data.user1.name, data.user1.pass);
    await loginPage.signIn_Btn.click();
    await expect(page).toHaveURL(`${baseURL}customer/account/index/`);
})