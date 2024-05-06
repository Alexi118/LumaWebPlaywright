import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class CartPage{
    readonly page: Page;
    readonly check_out_btn: Locator;
    readonly subtotal_currentprice_num: Locator;
    readonly subtotal_checkout_num: Locator;
    readonly tax_txt: Locator;

    constructor(page: Page){
        this.page = page;
        this.check_out_btn = page.locator(".CartPage-CheckoutButtonWrapper");
        this.subtotal_currentprice_num = page.locator("p[class='ProductPrice CartItem-Price'] data");
        this.subtotal_checkout_num = page.locator("");
    }
}