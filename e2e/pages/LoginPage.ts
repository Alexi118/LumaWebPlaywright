import {Locator, Page, expect} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly user_txt: Locator;
    readonly pass_txt: Locator;
    readonly signIn_Btn: Locator;
    readonly MyAccount_PageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.user_txt = page.locator("#email");
        this.pass_txt = page.locator("input[title=Password]");
        this.signIn_Btn = page.locator("button[class='action login primary']");
        this.MyAccount_PageTitle = page.locator("[data-ui-id=page-title-wrapper]");
    }

    async enterUserNamePassword(user: string, pass: string){
        await this.user_txt.fill(user);
        await this.pass_txt.fill(pass);
        await this.signIn_Btn.click();
    }    
}