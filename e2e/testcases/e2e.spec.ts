import {test, expect} from '@playwright/test'
import data from "../data/loginData.json"

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({page,baseURL})=>{
    })

    test.only("Test purchasing & paid successfully 1 item",async ({page}) => {
    })
})