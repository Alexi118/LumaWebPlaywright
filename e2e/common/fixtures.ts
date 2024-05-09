import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { JacketsPage } from '../pages/JacketsPage';
import { JacketDetailPage } from '../pages/JacketDetailPage';
import { CartPage } from '../pages/CartPage';

import { ignoreLoadingRoutes } from './ignoreLoadingRoutes';
import { ShippingPage } from '../pages/ShippingPage';

type BaseTest = {
    loginPage: LoginPage;
    homePage: HomePage;
    jacketsPage: JacketsPage;
    jacketDetailPage: JacketDetailPage;
    cartPage: CartPage;
    shippingPage: ShippingPage;
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
    jacketsPage:async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new JacketsPage(page));
    },
    jacketDetailPage:async({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new JacketDetailPage(page));
    },
    cartPage: async({page},use)=>{
        await ignoreLoadingRoutes(page);
        await use(new CartPage(page));
    },
    shippingPage: async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new ShippingPage(page));
    }
});

export const testWithImageLoaded = base.extend({});

export {expect} from '@playwright/test';