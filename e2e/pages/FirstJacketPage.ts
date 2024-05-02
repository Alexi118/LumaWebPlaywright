import {Locator, Page} from '@playwright/test';
import * as common from '../common/commonAction';
import { OptionType } from '../enum/dropdownOptionType';
import { Color, Size } from '../enum/sizeAndColor';

export class FirstJacketPage{
    readonly page: Page;
    readonly item_Title: Locator;
    readonly color_selector: Locator;
    readonly size_selector: Locator;
    readonly addCount_btn: Locator;
    readonly removeCount_btn: Locator;
    readonly numCount_txt: Locator;
    readonly addToCart_btn: Locator;
    readonly cartNumber_icon: Locator;
    readonly cart_icon: Locator;
    readonly removeOnCart_btn: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.item_Title = page.locator(".ProductPage-Title");
        this.color_selector = page.locator("#color");
        this.size_selector = page.locator("#size");
        this.addCount_btn = page.locator("button[aria-label=Add]");
        this.removeCount_btn = page.locator("button[aria-label=Subtract]");
        this.numCount_txt = page.locator("button[aria-label=Subtract]");
        this.addToCart_btn = page.locator("button[class='Button AddToCart Button AddToCart_layout_grid ProductActions-AddToCart']");
        this.cartNumber_icon = page.locator(".Header-MinicartItemCount");
        this.removeOnCart_btn = page.locator("#RemoveItem");
        this.cart_icon = page.locator(".Header-MinicartButtonWrapper");

    }

    async selectSize(size: Size){
        await common.selectDropDown(this.size_selector, OptionType.LABEL, size);
    }

    async selectColor(color: Color){
        await common.selectDropDown(this.color_selector, OptionType.LABEL, color);
    }

    async clearTestData(){
        await this.cart_icon.click();
        await this.removeOnCart_btn.click();
    }
}
