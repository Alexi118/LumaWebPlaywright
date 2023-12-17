import { expect, test} from '@playwright/test';
import data from "../../data/loginData.json"

import {HomePage} from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';

test.describe('End to End tests', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
})

test.only("Login successfully by SignIn on HomePage link", async ({page,baseURL})=>{
    await page.goto(`${baseURL}/customer/account/login`);
    await homePage.signIn_Btn.click();
    await expect(page).toHaveURL('\/\customer\/\account\/\login/');
})

test("Login successfully by SignIn on Customer Account link", async ({page,baseURL})=>{
    await page.goto(`${baseURL}customer/account/`);
    await loginPage.enterUserNamePassword(data.user1.name, data.user1.pass);
    await loginPage.signIn_Btn.click();
    await expect(page).toHaveURL(`${baseURL}customer/account/index/`);
})
})