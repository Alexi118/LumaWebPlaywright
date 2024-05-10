import { test as base } from '@playwright/test';
import { MyaccPage } from '../pages/MyaccPage';
import { HomePage } from '../pages/HomePage';
import { JacketsPage } from '../pages/JacketsPage';
import { JacketDetailPage } from '../pages/JacketDetailPage';
import { CartPage } from '../pages/CartPage';
import { BillingPage } from '../pages/BillingPage';
import { SuccessPage } from '../pages/SuccessPage';
import { MyorderPage } from '../pages/MyorderPage';

import { ignoreLoadingRoutes } from './ignoreLoadingRoutes';

type BaseTest = {
    myaccPage: MyaccPage;
    homePage: HomePage;
    jacketsPage: JacketsPage;
    jacketDetailPage: JacketDetailPage;
    cartPage: CartPage;
    billingPage: BillingPage;
    successPage: SuccessPage;
    myorderPage: MyorderPage;
};

export const test = base.extend<BaseTest>({
    myaccPage: async ({page},use)=>{
        await ignoreLoadingRoutes(page);
        const myaccPage = new MyaccPage(page);
        await use(myaccPage);
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
    billingPage: async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new BillingPage(page));
    },
    successPage: async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new SuccessPage(page));
    },
    myorderPage: async ({page},use) => {
        await ignoreLoadingRoutes(page);
        await use(new MyorderPage(page));
    }
});

export const testWithImageLoaded = base.extend({});

export {expect} from '@playwright/test';