import BasePage from './basePage.js';

class CheckoutComplete extends BasePage {
    get completeHeader() {
        return $('[data-test="complete-header"]');
    }

    get backHomeBtn() {
        return $('#back-to-products');
    }

    async backHomeBtnClick() {
        await this.backHomeBtn.click();
    }
}

export default new CheckoutComplete();
