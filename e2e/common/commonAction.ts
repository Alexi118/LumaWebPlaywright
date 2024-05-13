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

export async function verifyUrl(page: Page, link?: string, timeout?: number){
    if(link){
        return await page.waitForURL(`${baseURL}${link}`, {waitUntil: 'load', timeout: timeout});
    }
    else{
        return await page.waitForURL(`${baseURL}`, {waitUntil: 'load', timeout: timeout});
    }
}

export async function goToPage(page: Page, link?: string, timeout?: number){
    const btnAcceptCookie = 'div[class="CookiePopup-CTA"]';
    if(link){
        await page.goto(`${baseURL}${link}`,{waitUntil: 'load',timeout: timeout});
    }
    else {
        await page.goto(`${baseURL}`,{waitUntil: 'load',timeout: timeout});
    }
    await checkThenAcceptCookieConsent(page);
}

export async function checkThenAcceptCookieConsent(page: Page) {
    const btnAcceptCookie = 'div[class="CookiePopup-CTA"]';
    try {
        if (await page.locator(btnAcceptCookie).count() > 0) {
            await page.locator(btnAcceptCookie).click();
        }
    } catch (error){
        console.error('No Accept Cookie Button detected!');
    };
}