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

    test("Test purchasing & paid successfully 1 item",async ({page,homePage,jacketPage, firstJacketPage, cartPage}) => {
        await test.step('1. Go to 1st women jacket product page', async()=>{
            await homePage.woman_mainmenu_btn.hover({force:true});
            await homePage.womanjackets_submenu_btn.click();
            await commonAction.verifyUrl(page, URLPath.WOMENJACKET);
            await jacketPage.action_Select_FirstJacket();
            await commonAction.verifyUrl(page, URLPath.OLIVIAZIPLIGHTJACKET);
            await expect(firstJacketPage.cartNumber_icon).toBeHidden();
        })
        await test.step('2. Select size, color & quantity then add items to cart', async()=>{
            await firstJacketPage.selectColor(Color.Black);
            await firstJacketPage.selectSize(Size.XL);
            await firstJacketPage.addCount_btn.click();
            await firstJacketPage.addToCart_btn.click();
            // await page.waitForSelector('.Header-MinicartButtonWrapper', {state: 'visible' ,timeout: 30000})
            expect(await firstJacketPage.cartNumber_icon.innerText()).toBe('2');
        })
        await test.step('3. Compare subtotal on detail page with cart page, & check order total on cart page', async()=>{
            let totalOnDetailPage:string = await firstJacketPage.getProductPriceAndQuantity();
            await commonAction.goToPage(page, URLPath.CART);
            await cartPage.checkingPriceOnCartPage(totalOnDetailPage);
        })
    })

    test.afterEach("Clear test data", async({page, firstJacketPage})=>{
        await commonAction.goToPage(page, URLPath.OLIVIAZIPLIGHTJACKET);
        await firstJacketPage.clearTestData();
        await expect(firstJacketPage.cartNumber_icon).toBeHidden();
    })
})