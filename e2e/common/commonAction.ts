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
        return await page.waitForURL(`${baseURL}${link}`, {waitUntil: 'load'});
    }
    else{
        return await page.waitForURL(`${baseURL}`, {waitUntil: 'load'});
    }
}

export async function goToPage(page: Page, link?: string){
    if(link){
        await page.goto(`${baseURL}${link}`);
    }
    else {
        await page.goto(`${baseURL}`);
    }
    await checkThenAcceptCookieConsent(page);
}

export async function checkThenAcceptCookieConsent(page: Page) {
    const btnAcceptCookie = 'div[class="CookiePopup-CTA"]';
    try {
        await page.waitForSelector(btnAcceptCookie, {timeout: 30000});
        if (await page.locator(btnAcceptCookie).count() > 0) {
            await page.click(btnAcceptCookie);
        }
    } catch (error) { }
}