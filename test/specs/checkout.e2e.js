import loginPage from '../pageobjects/login.page.js';
import credentials from '../helpers/credentials.js';
import homePage from '../pageobjects/home.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutStepOnePage from '../pageobjects/checkoutStepOne.page.js';
import checkoutStepTwoPage from '../pageobjects/checkoutStepTwo.page.js';
import checkoutCompletePage from '../pageobjects/checkoutComplete.page.js';

describe('Checkout', () => {
    it('Valid Checkout', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));

        await homePage.addBackpackClick()
        await homePage.shoppingCartClick()
        await cartPage.checkoutClick()
        await checkoutStepOnePage.fillCheckout('user', 'user', 'user')
        await checkoutStepOnePage.continueBntClick()
        await checkoutStepTwoPage.finishBtnClick()
        await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!')
        await checkoutCompletePage.backHomeBtnClick()

        await expect(await browser.getUrl()).toContain('https://www.saucedemo.com/inventory.html');
        await expect(await homePage.shoppingCartLink.getAttribute('span')).toBeNull()
    });
});
