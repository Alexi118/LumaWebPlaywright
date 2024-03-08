import { Page } from "@playwright/test";

export async function ignoreLoadingImagesRoute(page:Page) {
    await page.route('**/*', (route)=>{
        return route.request().resourceType() == 'image'
            ? route.abort() : route.continue();
    });
}