import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as commonAction from "../common/commonAction"
import * as URLPath from "../enum/route"

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,loginPage})=>{
        await loginPage.action_Login_ThenRedirectToHomePage(data.correctUser.name,data.correctUser.pass);
        await loginPage.account_icon.click();
        await commonAction.verifyUrl(page, URLPath.link.ACCOUNT);
        await expect(page.getByText('Logout')).toBeVisible();
        await loginPage.home_breadcrumb.click();
        await commonAction.verifyUrl(page, '/');
    })

    test("Test purchasing & paid successfully 1 item",async ({homePage,jacketPage}) => {
        await homePage.woman_mainmenu_btn.hover();
        await homePage.womanjackets_submenu_btn.click();
        await jacketPage.action_AddToCart_FirstJacket();
    })
})