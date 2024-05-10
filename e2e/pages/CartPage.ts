import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route';
import * as common from '../common/common';

export class CartPage{
    readonly page: Page;
    readonly check_out_btn: Locator;
    readonly subtotal_currentprice_num: Locator;
    readonly subtotal_summary_num: Locator;
    readonly tax_num: Locator;
    readonly checkout_btn: Locator;
    readonly ordertotal_num: Locator;

    constructor(page: Page){
        this.page = page;
        this.check_out_btn = page.locator(".CartPage-CheckoutButtonWrapper");
        this.subtotal_currentprice_num = page.locator("p[class='ProductPrice CartItem-Price'] data");
        this.subtotal_summary_num = page.locator("li[class=CheckoutOrderSummary-SummaryItem]:nth-child(1) strong strong");
        this.tax_num = page.locator(":nth-match(strong:right-of(p:has-text('Tax')) strong, 2)");
        this.check_out_btn = page.locator(".CartPage-CheckoutButton");
        this.ordertotal_num = page.locator("li[class='CheckoutOrderSummary-SummaryItem CheckoutOrderSummary-SummaryItem_isTotal'] strong strong")
    }

    async compareTotalOnDetailwithCartPage(totalOnDetailPage:string){
        let subtotalOnCartPage = await common.getFloatInTextofElement(this.subtotal_currentprice_num);
        if(totalOnDetailPage === subtotalOnCartPage){
            console.log(`total on detail page is equal to total on cart page!`);
        }
        console.log(`total on detail page = ${totalOnDetailPage}, total on cart page = ${subtotalOnCartPage}`);
    }

    async checkingSubtotalsOnCartPage(){
        let subtotalCurrent = await common.getFloatInTextofElement(this.subtotal_currentprice_num);
        let subtotalSummary = await common.getFloatInTextofElement(this.subtotal_summary_num);
        if(subtotalCurrent === subtotalSummary){
            console.log(`current total is equal to summary total`);
        }
        console.log(`total on detail page = ${subtotalCurrent}, total on cart page = ${subtotalSummary}`);
    }

    async checkingFinalOrderTotalCalculation(){
        let orderTotal = await common.getFloatInTextofElement(this.ordertotal_num);
        let subtotalSummary = await common.getFloatInTextofElement(this.subtotal_summary_num);
        let tax = await common.getFloatInTextofElement(this.tax_num);
        if(orderTotal === common.sumOfTwoNumberInString(subtotalSummary, tax)){
            console.log(`order total is calculated correctly!`);
        }
        console.log(`subtotalSummary = ${subtotalSummary}, tax = ${tax}, orderTotal = ${orderTotal}`);
    }

    async checkingPriceOnCartPage(totalOnDetailPage:string){
        await this.compareTotalOnDetailwithCartPage(totalOnDetailPage);
        await this.checkingSubtotalsOnCartPage();
        await this.checkingFinalOrderTotalCalculation();
    }
}