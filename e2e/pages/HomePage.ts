import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/const';

export class HomePage{
    readonly page: Page;
    readonly signIn_Btn: Locator;
    readonly userNameWelcome_txt: Locator;
    readonly women_NavigationMenu: Locator;
    readonly top_women_NavigationMenu: Locator;
    readonly jackets_women_NavigationMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.signIn_Btn = page.locator("div[class='panel header'] li[class='authorization-link'] a");
        this.userNameWelcome_txt = page.locator("ul[class='header links']:nth-child(2) .logged-in");
        this.women_NavigationMenu = page.locator("#ui-id-4");
        this.top_women_NavigationMenu = page.locator("#ui-id-9");
        this.jackets_women_NavigationMenu = page.locator("#ui-id-11");
    }

    async goToHomePage(){
        this.page.goto(baseURL);
    }

    async clickOn_SignInBtn(){
        await this.signIn_Btn.click();
    }
    
    async action_selectJacketsForWomen(){
        await this.women_NavigationMenu.hover();
        await this.top_women_NavigationMenu.hover();
        await this.jackets_women_NavigationMenu.click();
    }
}