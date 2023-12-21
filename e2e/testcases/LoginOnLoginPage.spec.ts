import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json"


test.beforeEach('Go to loginPage', async ({loginPage,page})=>{
    await loginPage.action_Login_ThenRedirectToHomePage(data.correctUser.name,data.correctUser.pass);
})
test("Login successfully by SignIn on Login link", async ({loginPage,page})=>{
    await expect(loginPage.logout_btn).toBeVisible();
})
// test("Login UnSuccessfully caused by empty email field", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Empty password field", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Wrong email", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Wrong password", async ({page,baseURL})=>{
// })