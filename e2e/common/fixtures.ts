import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = base.extend<BaseTest>({
    loginPage: async ({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    //short
    homePage:async ({page},use) => {
        await use(new HomePage(page));
    },
});

export {expect} from '@playwright/test';