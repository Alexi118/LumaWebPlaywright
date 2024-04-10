import { Page } from "@playwright/test";

export async function ignoreLoadingRoutes(page:Page) {
    await page.route('**/*', (route)=>{
        const addressList = ['google.com',];
        const resourceType = route.request().resourceType();
        const requestURL = route.request().url();
        const inBlockList = addressList.some(pattern => requestURL.match(pattern));

        if (['image', 'stylesheet', 'font','**.webp'].includes(resourceType) || inBlockList){
            route.abort().catch(()=>{});
        }
        else{
            route.continue().catch(()=>{});
        }
    });
}