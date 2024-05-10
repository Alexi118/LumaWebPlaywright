import {Locator, Page} from '@playwright/test';
import { OptionType } from '../enum/dropdownOptionType';
import { baseURL } from '../data/constant';

export function selectDropDown (element:Locator, selectBy: OptionType, value:any){
    switch(selectBy){
        case OptionType.VALUE:
            return element.selectOption(value);
        case OptionType.LABEL:
            return element.selectOption({label: value});
        case OptionType.INDEX:
            return element.selectOption({index: value});    
    }
};

export async function verifyUrl(page: Page, link?: string){
    if(link){
        return await page.waitForURL(`${baseURL}${link}`, {waitUntil: 'load', timeout: 30000});
    }
    else{
        return await page.waitForURL(`${baseURL}`, {waitUntil: 'load', timeout: 30000});
    }
}

export async function goToPage(page: Page, link?: string){
    const btnAcceptCookie = 'div[class="CookiePopup-CTA"]';
    if(link){
        await page.goto(`${baseURL}${link}`,{waitUntil: 'load',timeout: 30000});
    }
    else {
        await page.goto(`${baseURL}`,{waitUntil: 'load',timeout: 30000});
    }
    checkThenAcceptCookieConsent(page);
}

export async function checkThenAcceptCookieConsent(page: Page) {
    const btnAcceptCookie = 'div[class="CookiePopup-CTA"]';
    try {
        if (await page.locator(btnAcceptCookie).count() > 0) {
            await page.locator(btnAcceptCookie).click();
        }
    } catch (error){
        console.log('No Accept Cookie Button detected!');
    };
}