import BasePage from './basePage.js';

class CartPage extends BasePage {
    get itemName() {
        return $('.inventory_item_name');
    }

    get checkout() {
        return $('#checkout')
    }

    async checkoutClick () {
        return await this.checkout.click()
    }
}

export default new CartPage();
