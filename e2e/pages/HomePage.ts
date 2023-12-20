import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/constant';

export class HomePage{
    readonly page: Page;
    readonly account_icon: Locator;
    readonly email_txt: Locator;
    readonly pass_txt: Locator;
    readonly signin_btn: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.account_icon = page.locator("#myAccount svg");
        this.email_txt = page.locator("#email");
        this.pass_txt = page.locator("#password");
        this.signin_btn = page.locator(".MyAccountOverlay-SignInButton button");
    }

    async goToHomePage(){
        this.page.goto(baseURL);
    }

    async clickOn_SignInBtn(){
        await this.signin_btn.click();
    }
    
    async action_selectJacketsForWomen(){
        await this.women_NavigationMenu.hover();
        await this.top_women_NavigationMenu.hover();
        await this.jackets_women_NavigationMenu.click();
    }
}