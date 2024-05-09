import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as commonAction from "../common/commonAction"
import {URLPath} from "../enum/route"
import {Size, Color} from "../enum/sizeAndColor"
import { baseURL } from '../data/constant';

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,loginPage, homePage})=>{
        await loginPage.action_Login_LoginPage(page, data.correctUser.name,data.correctUser.pass);
        await expect(page.getByText('Logout')).toBeVisible();
        await commonAction.verifyUrl(page, URLPath.ACCOUNTAFTERLOGIN);
        await commonAction.goToPage(page);
        await commonAction.verifyUrl(page);
        await expect(homePage.welcome_txt).toHaveText('Welcome, Nguyen!');
    })

    test("Test purchasing & paid successfully 1 item",async ({page,homePage,jacketsPage, jacketDetailPage, cartPage, shippingPage}) => {
        let totalOnDetailPage:string;
    
        await test.step('1. Go to 1st women jacket product page', async()=>{
            await homePage.woman_mainmenu_btn.hover({force:true});
            await homePage.womanjackets_submenu_btn.click();
            await commonAction.verifyUrl(page, URLPath.WOMENJACKET);
            await jacketsPage.action_Select_FirstJacket();
            await commonAction.verifyUrl(page, URLPath.OLIVIAZIPLIGHTJACKET);
            await expect(jacketDetailPage.cartNumber_icon).toBeHidden();
        })
        await test.step('2. Select size, color & quantity then add items to cart', async()=>{
            await jacketDetailPage.selectSizeAndColor(Size.XL,Color.Black);
            await jacketDetailPage.addCount_btn.click();
            await jacketDetailPage.addToCart_btn.click();
            expect(await jacketDetailPage.cartNumber_icon.innerText()).toBe('2');
        })
        await test.step('3. Compare subtotal on detail page with cart page, & check order total on cart page', async()=>{
            totalOnDetailPage = await jacketDetailPage.getProductPriceAndQuantity();
            await commonAction.goToPage(page, URLPath.CART);
            await cartPage.checkingPriceOnCartPage(totalOnDetailPage);
            await cartPage.check_out_btn.click();
            await commonAction.verifyUrl(page, URLPath.SHIPPING);
        })
        await test.step('4. Checkout on shipping page', async()=>{
            await shippingPage.postal_shipping_btn.click();
            await shippingPage.proceed_billing_btn.click();
            await shippingPage.cash_on_delivery_btn.click();
            await expect(shippingPage.complete_order_btn).toBeDisabled();
            await shippingPage.term_and_conditions_btn.click();
            await expect(shippingPage.complete_order_btn).toBeEnabled();
            await shippingPage.complete_order_btn.click();    
        })
    })

    test.afterAll("Clear test data", async({page, jacketDetailPage})=>{
        await commonAction.goToPage(page, URLPath.OLIVIAZIPLIGHTJACKET);
        await jacketDetailPage.clearTestData();
        await expect(jacketDetailPage.cartNumber_icon).toBeHidden();
    })
})