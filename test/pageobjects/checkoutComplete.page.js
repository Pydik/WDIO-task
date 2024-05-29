import BasePage from './basePage.js';

class CheckoutComplete extends BasePage {

    get completeHeader () {
        return $('[data-test="complete-header"]')
    }

}

export default new CheckoutComplete();
