import {Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { goToPage } from '../common/commonAction';
import {URLPath} from '../enum/route'

export class MyaccPage{
    readonly page: Page;
    readonly account_icon: Locator;
    readonly email_txt: Locator;
    readonly pass_txt: Locator;
    readonly signin_btn: Locator;
    readonly logout_btn: Locator;
    readonly spinning_icon: Locator;
    readonly home_breadcrumb: Locator;
    readonly my_orders: Locator;

    constructor(page: Page){
        this.page = page;
        this.account_icon = page.locator("#myAccount svg");
        this.email_txt = page.locator("#email");
        this.pass_txt = page.locator("#password");
        this.signin_btn = page.locator(".MyAccountOverlay-SignInButton button");
        this.logout_btn = page.getByText('Logout');
        this.spinning_icon = page.locator('.Loader-Main');
        this.home_breadcrumb = page.locator('.Breadcrumb-Link').getByText('Home');
        this.my_orders = page.locator('li[class=MyAccountTabListItem]:nth-child(2)');
    }

    async action_Login_LoginPage(page: Page, email: string, pass: string){
        await goToPage(page, URLPath.ACCOUNTBEFORELOGIN);
        await this.email_txt.fill(email);
        await this.pass_txt.fill(pass);
        await this.signin_btn.click();
        await expect(this.spinning_icon).toBeHidden();
    }    
}