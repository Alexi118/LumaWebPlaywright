import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as commonAction from "../common/commonAction"
import {URLPath} from "../enum/route"
import { baseURL } from '../data/constant';
import { log } from 'console';
import { url } from 'inspector';

test.describe("Test Full E2E Flow",()=>{

    // test.beforeEach("Login successfully & redirect to Homepage",async ({page,loginPage})=>{
    //     await loginPage.action_Login_ThenRedirectToHomePage(page, data.correctUser.name,data.correctUser.pass);
    //     await commonAction.verifyUrl(page, URLPath.ACCOUNT);
    //     await expect(page.getByText('Logout')).toBeVisible();
    //     await loginPage.home_breadcrumb.click({force:true});
    //     await commonAction.verifyUrl(page, baseURL);
    // })

    // test("Test purchasing & paid successfully 1 item",async ({homePage,jacketPage}) => {
    //     await homePage.woman_mainmenu_btn.hover({force:true});
    //     await homePage.womanjackets_submenu_btn.click();
    //     await jacketPage.action_AddToCart_FirstJacket();
    // })

    test("test",async ({page}) => {
        await commonAction.goToPage(page, URLPath.ACCOUNT);
        await commonAction.verifyUrl(page, URLPath.ACCOUNT);
    })
})