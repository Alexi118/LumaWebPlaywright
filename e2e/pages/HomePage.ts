import {Locator, Page, expect} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly account_icon: Locator;
    readonly email_txt: Locator;
    readonly pass_txt: Locator;
    readonly logIn_frame: Locator;
    readonly signin_btn: Locator;
    readonly woman_mainmenu_btn: Locator;
    readonly womanjackets_submenu_btn: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.account_icon = page.locator("#myAccount path");
        this.email_txt = page.locator("#email");
        this.pass_txt = page.locator("#password");
        this.logIn_frame = page.locator("div[class='Overlay Overlay_isVisible MyAccountOverlay MyAccountOverlay_isVisible']");
        this.signin_btn = page.locator(".MyAccountOverlay-SignInButton button");
        this.woman_mainmenu_btn = page.locator("ul[class='Menu-ItemList Menu-ItemList_type_main'] li:nth-child(1)");
        this.womanjackets_submenu_btn = page.getByText("Jackets");
    }

    async goToHomePage(){
        await this.page.goto('/');
    }
    
    async action_Login(email:string, pass:string){
        await this.goToHomePage();
        await this.account_icon.click({force: true});
        expect(this.logIn_frame).toBeVisible();
        await this.email_txt.fill(email);
        await this.pass_txt.fill(pass);
        await this.signin_btn.click();
    }
}