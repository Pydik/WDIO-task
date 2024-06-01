import loginPage from '../pageobjects/login.page.js';
import credentials from '../helpers/credentials.js';
import homePage from '../pageobjects/home.page.js';

describe('My Login application', () => {
    it('login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));
        await expect(loginPage.logo).toHaveText('Swag Labs');
    });

    it.only('Login with invalid password', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('invalidPassword'));
        await expect(await loginPage.errorIcon).toHaveLength(2);
        await expect(await loginPage.error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Login with invalid login', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('invalidLogin'));
        await expect(await loginPage.errorIcon).toHaveLength(2);
        await expect(loginPage.error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Logout', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));
        await homePage.burgerMenuClick();
        await homePage.logoutClick();
        await expect(await browser.getUrl()).toContain('https://www.saucedemo.com/');
        await expect(loginPage.inputUsername).toHaveText('');
        await expect(loginPage.inputPassword).toHaveText('');
    });
});
