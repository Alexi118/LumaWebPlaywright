import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/constant';

export class LoginPage{
    readonly page: Page;
    readonly user_txt: Locator;
    readonly pass_txt: Locator;
    readonly signIn_Btn: Locator;
    readonly userNameSignedIn_txt: Locator;
    readonly luma_logo: Locator;


    constructor(page: Page){
        this.page = page;
        this.user_txt = page.locator("#email");
        this.pass_txt = page.locator("input[title=Password]");
        this.signIn_Btn = page.locator("button[class='action login primary']");
        this.userNameSignedIn_txt = page.locator(".box-content p");
        this.luma_logo = page.locator(".logo");
    }

    async goToLoginPage(){
        this.page.goto(`${baseURL}customer/account/login`);
    }

    async action_Loginsuccessfully_ThenRedirectToHomePage(user: string, pass: string){
        await this.goToLoginPage();
        await this.user_txt.fill(user);
        await this.pass_txt.fill(pass);
        await this.signIn_Btn.click();
        await this.luma_logo.click();
    }    
}