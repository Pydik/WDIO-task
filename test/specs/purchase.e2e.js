import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page.js';
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page.js';
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page.js';
import credentials from '../helpers/credentials.js';

describe('Testing purchases', () => {
    it.only('Confirmation of purchase', async () => {
        await LoginPage.open();
        await LoginPage.login(credentials.getUserCredentials('standard'))
        await HomePage.addBackpackClick()
        await HomePage.addBikeLightClick()
        await expect(HomePage.shoppingCart).toHaveText('2')
        await HomePage.shoppingCartClick()
        await CartPage.checkoutBtnClick()
        await CheckoutStepOnePage.fillCheckout('user','user','user')
        await CheckoutStepOnePage.continueBntClick()
        await CheckoutStepTwoPage.finishBtnClick()
        await expect(CheckoutCompletePage.completeHeader).toHaveText('Thank you for your order!')
    })
})

