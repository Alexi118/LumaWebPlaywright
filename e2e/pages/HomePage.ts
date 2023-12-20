import {Locator, Page, expect} from '@playwright/test';

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
        await this.page.goto('/');
    }
    
    async action_Login(email:string, pass:string){
        await this.goToHomePage();
        await this.account_icon.click();
        await this.email_txt.fill(email);
        await this.pass_txt.fill(pass);
        await this.signin_btn.click();
    }
}