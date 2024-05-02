import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class CartPage{
    readonly page: Page;
    readonly 

    constructor(page: Page){
        this.page = page;
        
    }
}