import BasePage from './basePage.js';

class HomePage extends BasePage {

    get addBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get addBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get shoppingCart () {
        return $('[data-test="shopping-cart-badge"]')
    }

    open () {
        return super.open('inventory.html');
    }

    addBackpackClick () {
        return this.addBackpack.click()
    }

    addBikeLightClick () {
        return this.addBikeLight.click()
    }

    shoppingCartClick () {
        return this.shoppingCart.click()
    }
}

export default new HomePage();
