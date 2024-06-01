import BasePage from './basePage.js';

class CartPage extends BasePage {
    get itemName() {
        return $('.inventory_item_name');
    }
}

export default new CartPage();
