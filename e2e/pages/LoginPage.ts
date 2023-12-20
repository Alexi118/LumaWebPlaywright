import {Locator, Page} from '@playwright/test';
import { baseURL } from '../data/constant';

export class LoginPage{
    readonly page: Page;


    constructor(page: Page){
        this.page = page;
    }

    async goToLoginPage(){
        this.page.goto('/customer/account/login');
    }

    async action_Loginsuccessfully_ThenRedirectToHomePage(user: string, pass: string){
    }    
}