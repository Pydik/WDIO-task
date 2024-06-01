import inventoryPage from '../pageobjects/inventory.page.js';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import cartPage from '../pageobjects/cart.page.js';
import credentials from '../helpers/credentials.js';

describe('Cart', () => {
    it('Saving the card after logout ', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));
        await inventoryPage.addToCartBackpackClick();
        await homePage.burgerMenuClick();
        await homePage.logoutClick();
        await loginPage.login(credentials.getUserCredentials('standard'));
        await homePage.shoppingCartClick();
        await expect(await browser.getUrl()).toContain('https://www.saucedemo.com/cart.html');
        await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');
    });
});
