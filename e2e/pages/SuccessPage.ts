import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class SuccessPage{
    readonly page:Page;
    readonly your_order_is:Locator;
    readonly continue_shopping:Locator;

    constructor(page: Page){
        this.page = page;
        this.your_order_is = page.locator('.CheckoutSuccess h3');
        this.continue_shopping = page.locator('.CheckoutSuccess-ContinueButton');
    }
}