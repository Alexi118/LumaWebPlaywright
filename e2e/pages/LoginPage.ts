import {Locator, Page, expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly user_txt: Locator;
    readonly pass_txt: Locator;
    readonly signIn_Btn: Locator;
    readonly userNameSignedIn_txt: Locator;


    constructor(page: Page){
        this.page = page;
        this.user_txt = page.locator("#email");
        this.pass_txt = page.locator("input[title=Password]");
        this.signIn_Btn = page.locator("button[class='action login primary']");
        this.userNameSignedIn_txt = page.locator(".box-content p");
    }

    async goToLoginPage(){
        this.page.goto("https://magento.softwaretestingboard.com/customer/account/login");
    }

    async action_enterInfoAndSignIn(user: string, pass: string){
        await this.user_txt.fill(user);
        await this.pass_txt.fill(pass);
        await this.signIn_Btn.click();
    }    
}