import { expect, test} from '../common/fixtures';
import { baseURL } from '../data/constant';
import data from "../data/loginData.json";

test.describe("Test Full E2E Flow",()=>{

    test.beforeEach("Login successfully & redirect to Homepage",async ({homePage})=>{
        await homePage.action_Login(data.correctUser.name,data.correctUser.pass);
    })

    test("Test purchasing & paid successfully 1 item",async ({page,loginPage}) => {
        await loginPage.account_icon.click();
        await expect(page.getByText('Logout')).toBeVisible();
        await loginPage.home_breadcrumb.click();
    })
})