import {Locator, Page, expect} from '@playwright/test';

export async function getFloatInTextofElement (element: Locator){
    let result = (await element.innerText()).match(/[-+]?\d*\.\d+|\d+/g);
    let resultString = result ? result.toString() : "";
    return resultString;
};

export async function getFloatInListTextOfElements (listOfElements:Locator){
        let result = (await listOfElements.allInnerTexts()).map(x=>x.match(/[-+]?\d*\.\d+|\d+/g));
        let resultString = result.map(x=>x? x.toString() : "");
        return resultString;
};

export async function getSumOfListElements (listOfElements:Locator){
    let sum = 0;
    const number = (await getFloatInListTextOfElements(listOfElements)).map(parseFloat);
    number.forEach(num=>{
        sum +=num;
    })
    const numberString = sum.toString();
    return numberString;
};

// export const taxCalculation = (numString:string)=>{
//     let tax = 0;
//     tax = parseFloat(numString)/100*8;
//     return tax.toFixed(2).toString();
// };

export async function sumOfTwoNumberInString (num1:string, num2:string){
    let sum = 0;
    sum = parseFloat(num1) + parseFloat(num2);
    return sum.toFixed(2).toString();
};

export async function sortListFromAtoZ (listOfElements:string[]){
    return listOfElements.sort();
};

export async function sortListFromZtoA (listOfElements:string[]){
    return listOfElements.reverse();
};

export async function sortListFromLtoH (listOfElements:string[]){
    const numbers = listOfElements.map(parseFloat);
    numbers.sort((a, b) => a - b);
    const sortedString = numbers.map((number)=>number.toString());
    return sortedString;
};

export async function sortListFromHtoL (listOfElements:string[]){
    const numbers = listOfElements.map(parseFloat);
    numbers.sort((a, b) => b - a);
    const sortedString = numbers.map((number)=>number.toString());
    return sortedString;
};
