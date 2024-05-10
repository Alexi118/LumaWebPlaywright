import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class MyorderPage{
    readonly page: Page;
    readonly table_order_column: Locator;
    readonly table_total_column: Locator;
    readonly load_icon: Locator;

    constructor(page: Page){
        this.page = page;
        this.table_order_column = page.locator('table[class=MyAccountMyOrders-Table] tbody tr td:nth-child(1)');
        this.table_total_column = page.locator('table[class=MyAccountMyOrders-Table] tbody tr td:nth-child(4)');
        this.load_icon = page.locator('div[class=Loader]');
    }
}