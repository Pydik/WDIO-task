import BasePage from './basePage.js';

class Cart extends BasePage {

    get checkoutBtn () {
        return $('#checkout')
    }

    checkoutBtnClick () {
        this.checkoutBtn.click()
    }
}

export default new Cart();
