import {Locator, Page, Selectors, expect} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signIn_Btn: Locator;
    readonly userNameWelcome_txt: Locator;

    constructor(page: Page){
        this.page = page;
        this.signIn_Btn = page.locator("div[class='panel header'] li[class='authorization-link'] a");
        this.userNameWelcome_txt = page.locator("ul[class='header links']:nth-child(2) .logged-in");
    }

    async goToHomePage(){
        this.page.goto("https://magento.softwaretestingboard.com/");
    }

    async clickOn_SignInBtn(){
        await this.signIn_Btn.click();
    }    
}