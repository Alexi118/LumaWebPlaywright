import {Locator, Page} from '@playwright/test';

export class FirstItem{
    readonly page: Page;
    readonly item_Title: Locator;
    readonly color_selector: Locator;
    readonly size_selector: Locator;
    readonly addCount_btn: Locator;
    readonly removeCount_btn: Locator;
    readonly numCount_txt: Locator;
    readonly addToCart_btn: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.item_Title = page.locator(".ProductPage-Title");
        this.color_selector = page.locator("#color");
        this.size_selector = page.locator("#size");
        this.addCount_btn = page.locator("button[aria-label=Add]");
        this.removeCount_btn = page.locator("button[aria-label=Add]");
        this.numCount_txt = page.locator("button[aria-label=Subtract]");
        this.addToCart_btn = page.locator("");
    }
}