import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as commonAction from "../common/commonAction"
import {URLPath} from "../enum/route"

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,loginPage, homePage})=>{
        await loginPage.action_Login_LoginPage(page, data.correctUser.name,data.correctUser.pass);
        expect(page.getByText('Logout')).toBeVisible();
        await commonAction.verifyUrl(page, URLPath.ACCOUNT);
        await commonAction.goToPage(page);
        await commonAction.verifyUrl(page);
        expect(homePage.welcome_txt).toHaveText('Welcome, Nguyen!');
    })

    test("Test purchasing & paid successfully 1 item",async ({homePage,jacketPage}) => {
        await homePage.woman_mainmenu_btn.hover({force:true});
        await homePage.womanjackets_submenu_btn.click();
        await jacketPage.action_AddToCart_FirstJacket();
    })
})