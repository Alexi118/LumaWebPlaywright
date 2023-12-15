import {Locator, Page, expect} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly user_txt: Locator;

    constructor(page: Page){
        this.page = page;
        this.user_txt = page.locator("#email");
    }

    public async enterUserNamePassword(){
        await this.user_txt.fill("dfsdfsdf");
    }    
}