import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ignoreLoadingImagesRoute } from './ignoreLoadingImagesRoute';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = base.extend<BaseTest>({
    page: async({page},use)=>{
        await ignoreLoadingImagesRoute(page);
        await use(page);
    },
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