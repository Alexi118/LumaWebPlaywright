import { expect, test} from '@playwright/test';
import data from "../data/loginData.json"

import {HomePage} from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Successfully', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
})

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      // Get a unique place for the screenshot.
      const screenshotPath = testInfo.outputPath('fail.png');
      // Add it to the report.
      testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' });
      // Take the screenshot itself.
      await page.screenshot({ path: screenshotPath, timeout: 5000 });
    }
    page.close();
  });

test("Login successfully by SignIn on HomePage link", async ({page,baseURL})=>{
    await homePage.goToHomePage();
    await expect(page).toHaveURL(`${baseURL}`);
    await homePage.signIn_Btn.click();
    await expect(page).toHaveURL(new RegExp('^https://magento.softwaretestingboard.com/customer/account/login'));
    await loginPage.action_enterInfoAndSignIn(data.user1.name, data.user1.pass);
    await page.waitForResponse(resp => resp.url().includes("/customer/section/load") && resp.status() === 200);
    await expect(page).toHaveURL(`${baseURL}`);
    expect(homePage.userNameWelcome_txt).toHaveText("Welcome, Cuong Nguyen Duc!")
})

test("Login successfully by SignIn on Customer Account link", async ({page,baseURL})=>{
    await loginPage.goToLoginPage();
    await expect(page).toHaveURL(`${baseURL}customer/account/login`);
    await loginPage.action_enterInfoAndSignIn(data.user1.name, data.user1.pass);
    await expect(page).toHaveURL(`${baseURL}customer/account/`);
    expect(loginPage.userNameSignedIn_txt).toHaveText("\nCuong Nguyen Duc\ncuongnd11@gmail.com\n")
})
})