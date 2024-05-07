import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route';
import * as common from '../common/common';

export class CartPage{
    readonly page: Page;
    readonly check_out_btn: Locator;
    readonly subtotal_currentprice_num: Locator;
    readonly subtotal_checkout_num: Locator;
    readonly tax_num: Locator;
    readonly checkout_btn: Locator;
    readonly finaltotal_num: Locator;

    constructor(page: Page){
        this.page = page;
        this.check_out_btn = page.locator(".CartPage-CheckoutButtonWrapper");
        this.subtotal_currentprice_num = page.locator("p[class='ProductPrice CartItem-Price'] data");
        this.subtotal_checkout_num = page.locator("li[class=CheckoutOrderSummary-SummaryItem]:nth-child(1) strong strong");
        this.tax_num = page.locator("li[class=CheckoutOrderSummary-SummaryItem]:nth-child(2) strong strong");
        this.check_out_btn = page.locator(".CartPage-CheckoutButton");
        this.finaltotal_num = page.locator("li[class='CheckoutOrderSummary-SummaryItem CheckoutOrderSummary-SummaryItem_isTotal'] strong strong")
    }

    async compareTotalOnDetailwithCartPage(totalOnDetailPage:string){
        try {
            if(totalOnDetailPage === await common.getFloatInTextofElement(this.subtotal_currentprice_num)){
                console.log("total on detail page is equal to total on cart page!")
            }
        } catch (error) {
            console.log("total on detail page is not equal to total on cart page!")
        }
    }
}