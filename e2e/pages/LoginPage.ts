import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/constant';
import { expect } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly account_icon: Locator;
    readonly email_txt: Locator;
    readonly pass_txt: Locator;
    readonly signin_btn: Locator;
    readonly logout_btn: Locator;
    readonly spinning_icon: Locator;
    readonly home_breadcrumb: Locator;

    constructor(page: Page){
        this.page = page;
        this.account_icon = page.locator("#myAccount svg");
        this.email_txt = page.locator("#email");
        this.pass_txt = page.locator("#password");
        this.signin_btn = page.locator(".MyAccountOverlay-SignInButton button");
        this.logout_btn = page.getByText('Logout');
        this.spinning_icon = page.locator('.Loader-Main');
        this.home_breadcrumb = page.locator('.Breadcrumb-Link').getByText('Home');
    }

    async goToLoginPage(){
        this.page.goto('/customer/account/login');
    }

    async action_Login_ThenRedirectToHomePage(email: string, pass: string){
        await this.goToLoginPage();
        await this.email_txt.fill(email);
        await this.pass_txt.fill(pass);
        await this.signin_btn.click();
        await expect(this.spinning_icon).toBeHidden();
        await expect(this.logout_btn).toBeVisible();
    }    
}