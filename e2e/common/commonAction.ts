import {Locator, Page, expect} from '@playwright/test';
import { OptionType } from '../enum/dropdownOptionType';

export async function selectDropDown (element:Locator , page:Page, selectBy: OptionType, value:any){
    switch(selectBy){
        case OptionType.VALUE:
            return await element.selectOption(value);
        case OptionType.LABEL:
            return await element.selectOption({label: value});
        case OptionType.INDEX:
            return await element.selectOption({index: value});    
    }
};

export async function verifyUrl(page: Page, expectedUrl: string){
    return await page.waitForURL(`/${expectedUrl}`, {waitUntil: 'domcontentloaded'});
}