import {Locator, Page, expect} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signIn_Btn: Locator;

    constructor(page: Page){
        this.page = page;
        this.signIn_Btn = page.locator("div[class='panel header'] li[class='authorization-link'] a");
    }

    public async clickOn_SignInBtn(){
        await this.signIn_Btn.click();
    }    
}