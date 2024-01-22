import {Locator, Page} from '@playwright/test';
        
export class JacketsPage{
    readonly firstItem_addToCart: Locator;
    readonly firstJacketHover: Locator;
    readonly firstItem_Title: Locator;

    constructor(page:Page){
        this.firstItem_addToCart = page.locator(".ProductListPage li:nth-child(1) a .ProductCard-Footer >button");
        this.firstJacketHover = page.locator(".ProductListPage li:nth-child(1) a");
        this.firstItem_Title = page.locator(".ProductListPage li:nth-child(1) p");
    }

    async action_AddToCart_FirstJacket(){
        await this.firstJacketHover.hover();
        await this.firstItem_addToCart.click();
    }
}