import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'
import * as common from '../common/common';
import { ExecException } from 'child_process';

export class MyorderPage{
    readonly page: Page;
    readonly table_order_column: Locator;
    readonly table_total_column: Locator;
    readonly load_icon: Locator;
    readonly order_id_list: Locator;
    readonly last_page: Locator;

    constructor(page: Page){
        this.page = page;
        this.table_order_column = page.locator('table[class=MyAccountMyOrders-Table] tbody tr td:nth-child(1)');
        this.table_total_column = page.locator('table[class=MyAccountMyOrders-Table] tbody tr td:nth-child(4)');
        this.load_icon = page.locator('div[class=Loader]');
        this.order_id_list = page.locator('tr[class=MyAccountOrderTableRow] td:nth-child(1)');
        this.last_page = page.locator('li[class=Pagination-ListItem]:nth-last-child(2) a');
    }
}