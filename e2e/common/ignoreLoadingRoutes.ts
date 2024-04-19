import { Page } from "@playwright/test";

export async function ignoreLoadingRoutes(page:Page) {
    await page.route('**/*', (route)=>{
        const resourceType = route.request().resourceType();

        if (['image', 'stylesheet', 'font'].includes(resourceType)){
            route.abort().catch(()=>{});
        }
        else{
            route.continue().catch(()=>{});
        }
    });
}