import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as commonAction from "../common/commonAction"
import {URLPath} from "../enum/route"
import {Size, Color} from "../enum/sizeAndColor"

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,loginPage, homePage})=>{
        await loginPage.action_Login_LoginPage(page, data.correctUser.name,data.correctUser.pass);
        await expect(page.getByText('Logout')).toBeVisible();
        await commonAction.verifyUrl(page, URLPath.ACCOUNTAFTERLOGIN);
        await commonAction.goToPage(page);
        await commonAction.verifyUrl(page);
        await expect(homePage.welcome_txt).toHaveText('Welcome, Nguyen!');
    })

    test("Test purchasing & paid successfully 1 item",async ({page,homePage,jacketPage, firstJacketPage}) => {
        await homePage.woman_mainmenu_btn.hover({force:true});
        await homePage.womanjackets_submenu_btn.click();
        await jacketPage.action_AddToCart_FirstJacket();
        await commonAction.verifyUrl(page, URLPath.OLIVIAZIPLIGHTJACKET);
        await expect(firstJacketPage.cartNumber_icon).toBeHidden();
        await firstJacketPage.selectColor(Color.Black);
        await firstJacketPage.selectSize(Size.XL);
        await firstJacketPage.addCount_btn.click();
        await firstJacketPage.addToCart_btn.click();
        expect(await firstJacketPage.cartNumber_icon.innerText()).toBe('2');
    })

    test.afterEach("Clear test data", async({page, firstJacketPage})=>{
        await commonAction.goToPage(page, URLPath.OLIVIAZIPLIGHTJACKET);
        await firstJacketPage.clearTestData();
        await expect(firstJacketPage.cartNumber_icon).toBeHidden();
    })
})