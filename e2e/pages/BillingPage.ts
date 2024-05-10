import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class BillingPage{
    readonly standard_shipping_btn: Locator;
    readonly postal_shipping_btn: Locator;
    readonly proceed_billing_btn: Locator;
    readonly cash_on_delivery_btn: Locator;
    readonly term_and_conditions_btn: Locator;
    readonly complete_order_btn: Locator;

    constructor(page:Page){
        this.standard_shipping_btn = page.locator('.CheckoutDeliveryOption:nth-child(1) button');
        this.postal_shipping_btn = page.locator('.CheckoutDeliveryOption:nth-child(2) button');
        this.proceed_billing_btn = page.locator('button[class="Button CheckoutShipping-Button"]');
        this.cash_on_delivery_btn = page.locator('input[id="option-Cash On Delivery"]');
        this.term_and_conditions_btn = page.locator('#termsAndConditions');
        this.complete_order_btn = page.locator('.Checkout-StickyButtonWrapper button');
    }

}