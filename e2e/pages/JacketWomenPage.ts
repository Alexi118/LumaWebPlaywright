import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/const';

export class JacketWomenPage{
    readonly jackets_pageTitle;
    readonly firstItem_color;
    readonly firstItem_size;
    readonly firstItem_addToCart;

    constructor(page:Page){
        this.jackets_pageTitle = page.locator("#page-title-heading");
        this.firstItem_color = page.locator("li[class='item product product-item']:nth-child(1) div[option-label='Blue']");
        this.firstItem_size = page.locator("li[class='item product product-item']:nth-child(1) div[option-label='S']");
        this.firstItem_addToCart = page.locator("li[class='item product product-item']:nth-child(1) button");
    }

    async action_AddToCart_BlueJacketsSizeS(){
        this.firstItem_size.click();
        this.firstItem_color.click();
        this.firstItem_size.hover();
        this.firstItem_addToCart.click();
    }
}