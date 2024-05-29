import LoginPage from '../pageobjects/login.page.js';
import credentials from '../helpers/credentials.js';

describe('My Login application', () => {
    it('login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(credentials.getUserCredentials('standard'))
        await expect(LoginPage.logo).toHaveText('Swag Labs')
    })

    it('login with empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.Login();
        /** 
         * You can use next option - await expect(LoginPage.error).toBeExisting(); 
         * but since one selector has different texts and they are used for 
         * different scenarios, I have given priority to this method
         * 
        **/
        await expect(LoginPage.error).toHaveText('Epic sadface: Username is required')
    })

    it('login with min credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('min','min')
        await expect(LoginPage.error).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})

