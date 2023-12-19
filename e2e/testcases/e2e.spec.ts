import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage';
import { JacketWomenPage } from '../pages/JacketWomenPage';
import data from "../data/loginData.json"

test.describe("Test Full E2E Flow",()=>{
    let homePage;
    let loginPage;
    let jacketWomenPage;

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,baseURL})=>{
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        jacketWomenPage = new JacketWomenPage(page);

        await loginPage.goToLoginPage();
        await expect(loginPage.signIn_Btn).toBeVisible();
        await loginPage.action_enterInfoAndSignIn(data.user1.name, data.user1.pass);
        await expect(loginPage.luma_logo).toBeVisible();
        await loginPage.luma_logo.click();
        expect(page.url()).toBe(`${baseURL}`);
        await page.reload();
        await expect(homePage.userNameWelcome_txt).toBeVisible();
    })

    test.only("Test purchasing & paid successfully 1 item",async ({page}) => {
        await homePage.action_selectJacketsForWomen();
        await expect(jacketWomenPage.jackets_pageTitle).toBeVisible();
        await jacketWomenPage.action_AddToCart_BlueJacketsSizeS();
        await page.reload();
    })
})