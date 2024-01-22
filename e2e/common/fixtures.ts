import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ignoreLoadingImagesRoute } from './ignoreLoadingImagesRoute';
import { JacketsPage } from '../pages/JacketsPage';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
    jacketPage: JacketsPage;
};

export const test = base.extend<BaseTest>({
    page: async({page},use)=>{
        await ignoreLoadingImagesRoute(page);
        await use(page);
    },
    loginPage: async ({page},use)=>{
        await ignoreLoadingImagesRoute(page);
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    //short
    homePage:async ({page},use) => {
        await ignoreLoadingImagesRoute(page);
        await use(new HomePage(page));
    },
    jacketPage:async ({page},use) => {
        await ignoreLoadingImagesRoute(page);
        await use(new JacketsPage(page));
    },
});

export {expect} from '@playwright/test';