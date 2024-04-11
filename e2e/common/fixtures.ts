import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ignoreLoadingRoutes } from './ignoreLoadingRoutes';
import { JacketsPage } from '../pages/JacketsPage';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
    jacketPage: JacketsPage;
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
});

export const testWithImageLoaded = base.extend({});

export {expect} from '@playwright/test';