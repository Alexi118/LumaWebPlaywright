import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { JacketsPage } from '../pages/JacketsPage';
import { FirstJacketPage } from '../pages/FirstJacketPage'

import { ignoreLoadingRoutes } from './ignoreLoadingRoutes';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
    jacketPage: JacketsPage;
    firstJacketPage: FirstJacketPage;
};

export const test = base.extend<BaseTest>({
    loginPage: async ({page},use)=>{
        await ignoreLoadingRoutes(page);
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    //short
    homePage:async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new HomePage(page));
    },
    jacketPage:async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new JacketsPage(page));
    },
    firstJacketPage:async({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new FirstJacketPage(page));
    }
});

export const testWithImageLoaded = base.extend({});

export {expect} from '@playwright/test';