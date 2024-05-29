import BasePage from './basePage.js';

class CheckoutStepTwo extends BasePage {

    get finishBtn () {
        return $('#finish')
    }

    finishBtnClick () {
        this.finishBtn.click()
    }
}

export default new CheckoutStepTwo();
