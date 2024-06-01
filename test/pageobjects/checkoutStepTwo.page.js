import BasePage from './basePage.js';

class CheckoutStepTwo extends BasePage {
    get finishBtn() {
        return $('#finish');
    }

    async finishBtnClick() {
        return await this.finishBtn.click();
    }
}

export default new CheckoutStepTwo();
