import BasePage from './basePage.js';

class InventoryPage extends BasePage {
    get addToCartBackpack() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addToCartBackpackClick() {
        return await this.addToCartBackpack.click();
    }
}

export default new InventoryPage();
