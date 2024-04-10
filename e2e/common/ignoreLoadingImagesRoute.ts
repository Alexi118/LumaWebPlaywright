import { Page } from "@playwright/test";

export async function ignoreLoadingImagesRoute(page:Page) {
    await page.route('**/*', (route)=>{
        const addressList = ['**/*bam.eu01.nr-data.net/**',];
        const resourceType = route.request().resourceType();
        const requestURL = route.request().url();
        const inBlockList = addressList.some(pattern => requestURL.match(pattern));

        if (['image', 'stylesheet', 'font'].includes(resourceType) || inBlockList){
            route.abort().catch(()=>{});
        }
        else{
            route.continue().catch(()=>{});
        }
    });
}