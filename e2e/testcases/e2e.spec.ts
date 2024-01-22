import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,homePage,loginPage})=>{
        await homePage.action_Login(data.correctUser.name,data.correctUser.pass);
        await loginPage.account_icon.click();
        await expect(page.getByText('Logout')).toBeVisible();
        await loginPage.home_breadcrumb.click();
    })

    test("Test purchasing & paid successfully 1 item",async ({page,homePage,jacketPage}) => {
        await homePage.woman_mainmenu_btn.hover();
        await homePage.womanjackets_submenu_btn.click();
        await jacketPage.action_AddToCart_FirstJacket();
    })
})