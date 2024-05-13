import { Page } from "@playwright/test";

export async function ignoreLoadingRoutes(page:Page) {
    await page.route('**/*', (route)=>{
        const resourceType = route.request().resourceType();

        if (['image'].includes(resourceType)){
            route.abort();
        }
        else{
            route.continue();
        }
    });
}