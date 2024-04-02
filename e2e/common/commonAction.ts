import {Locator, Page, expect} from '@playwright/test';
import { OptionType } from '../enum/dropdownOptionType';

export function selectDropDown (element:Locator , page:Page, selectBy: OptionType, value:any){
    switch(selectBy){
        case OptionType.VALUE:
            return element.selectOption(value);
        case OptionType.LABEL:
            return element.selectOption({label: value});
        case OptionType.INDEX:
            return element.selectOption({index: value});    
    }
};

export async function verifyUrl(page: Page, expectedUrl: string){
    await page.reload();
    return await page.waitForURL(`${expectedUrl}`, {waitUntil: 'domcontentloaded'});
}