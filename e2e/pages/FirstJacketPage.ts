import {Locator, Page} from '@playwright/test';
import * as commonAction from '../common/commonAction';
import * as common from '../common/common';
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
    readonly productprice_txt: Locator;
    readonly productquatity_txt: Locator;
    
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
        this.productprice_txt = page.locator(".ProductActions-Schema .ProductPrice-PriceValue");
        this.productquatity_txt = page.locator("#item_qty");
    }

    async selectSize(size: Size){
        await commonAction.selectDropDown(this.size_selector, OptionType.LABEL, size);
    }

    async selectColor(color: Color){
        await commonAction.selectDropDown(this.color_selector, OptionType.LABEL, color);
    }

    async clearTestData(){
        await this.cart_icon.click();
        await this.removeOnCart_btn.click();
    }

    async getProductPriceAndQuantity(){
        let totalprice: string;
        let productprice: string = await common.getFloatInTextofElement(this.productprice_txt);
        let productquantity: string = await common.getNumberInputValueofElement(this.productquatity_txt);
        totalprice = common.productOfTwoNumberInString(productprice, productquantity);
        console.log(`productprice = ${productprice}`);
        console.log(`productquantity = ${productquantity}`);
        console.log(`totalprice = ${totalprice}`);
        return totalprice;
    }
}
