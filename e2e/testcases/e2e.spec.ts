import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json";
import * as common from "../common/common";
import * as commonAction from "../common/commonAction";
import {URLPath} from "../enum/route";
import {Size, Color} from "../enum/sizeAndColor";
import { baseURL } from '../data/constant';
import { MyaccPage } from '../pages/MyaccPage';

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,myaccPage, homePage})=>{
        await myaccPage.action_Login_LoginPage(page, data.correctUser.name,data.correctUser.pass);
        await expect(page.getByText('Logout')).toBeVisible();
        await commonAction.verifyUrl(page, URLPath.ACCOUNTAFTERLOGIN);
        await commonAction.goToPage(page);
        await commonAction.verifyUrl(page);
        await expect(homePage.welcome_txt).toHaveText('Welcome, Nguyen!');
    })

    // test("Test purchasing & paid successfully 1 item",async ({page,myaccPage,homePage,jacketsPage, jacketDetailPage, cartPage, billingPage, successPage, myorderPage}) => {
    //     let totalOnDetailPage:string;
    //     let orderID:string;
    
    //     await test.step('1. Go to 1st women jacket product page', async()=>{
    //         await homePage.woman_mainmenu_btn.hover({force:true});
    //         await homePage.womanjackets_submenu_btn.click();
    //         await commonAction.verifyUrl(page, URLPath.WOMENJACKET);
    //         await jacketsPage.action_Select_FirstJacket();
    //         await commonAction.verifyUrl(page, URLPath.OLIVIAZIPLIGHTJACKET);
    //         await expect(jacketDetailPage.cartNumber_icon).toBeHidden();
    //     })
    //     await test.step('2. Select size, color & quantity then add items to cart', async()=>{
    //         await jacketDetailPage.selectSizeAndColor(Size.XL,Color.Black);
    //         await jacketDetailPage.addCount_btn.click();
    //         await jacketDetailPage.addToCart_btn.click();
    //         expect(await jacketDetailPage.cartNumber_icon.innerText()).toBe('2');
    //     })
    //     await test.step('3. Compare subtotal on detail page with cart page, & check order total on cart page', async()=>{
    //         totalOnDetailPage = await jacketDetailPage.getProductPriceAndQuantity();
    //         await commonAction.goToPage(page, URLPath.CART);
    //         await cartPage.checkingPriceOnCartPage(totalOnDetailPage);
    //         await cartPage.check_out_btn.click();
    //         await commonAction.verifyUrl(page, URLPath.SHIPPING);
    //     })
    //     await test.step('4. Checkout on shipping page', async()=>{
    //         await billingPage.postal_shipping_btn.click();
    //         await billingPage.proceed_billing_btn.click();
    //         await billingPage.cash_on_delivery_btn.click();
    //         await expect(billingPage.complete_order_btn).toBeDisabled();
    //         await billingPage.term_and_conditions_btn.click();
    //         await expect(billingPage.complete_order_btn).toBeEnabled();
    //         await billingPage.complete_order_btn.click();
    //         await commonAction.verifyUrl(page, URLPath.SUCCESS);
    //     })
    //     await test.step('5. Go to success page, generate order ID & redirect to homepage', async()=>{
    //         orderID = await common.getFloatInTextofElement(successPage.your_order_is);
    //         console.log(`orderID = ${orderID}`);
    //         await successPage.continue_shopping.click();
    //         await commonAction.verifyUrl(page);
    //     })
    //     await test.step('6. Go to my account & check order is display in list', async()=>{
    //         await commonAction.goToPage(page, URLPath.ACCOUNTAFTERLOGIN);
    //         await myaccPage.my_orders.click();
    //         await commonAction.verifyUrl(page, URLPath.MYORDER);
    //         await expect(myorderPage.load_icon).toHaveCount(0);
    //     })
    // })

    test('order list',async ({page, myorderPage})=>{
        commonAction.goToPage(page, URLPath.MYORDER);
        await commonAction.verifyUrl(page, URLPath.MYORDER);
        await expect(myorderPage.load_icon).toHaveCount(0);
        
    })

    // test.afterEach("Clear test data", async({page, jacketDetailPage})=>{
    //     await commonAction.goToPage(page, URLPath.OLIVIAZIPLIGHTJACKET);
    //     await jacketDetailPage.clearTestData();
    //     await expect(jacketDetailPage.cartNumber_icon).toBeHidden();
    // })
})