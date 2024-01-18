import { expect, test} from '../common/fixtures';
import data from "../data/loginData.json"


test.beforeEach('Go to homepage', async ({homePage})=>{
    await homePage.action_Login(data.correctUser.name,data.correctUser.pass);
})
test("Login successfully by SignIn on HomePage link", async ({loginPage,page})=>{
    await loginPage.goToLoginPage();
    await expect(page.getByText('Logout')).toBeVisible();
})
// test("Login UnSuccessfully caused by empty email field", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Empty password field", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Wrong email", async ({page,baseURL})=>{
// })
// test("Login UnSuccessfully caused by Wrong password", async ({page,baseURL})=>{
// })