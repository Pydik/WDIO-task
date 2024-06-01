import BasePage from './basePage.js';

class HomePage extends BasePage {
    get addBackpack() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get addBikeLight() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }
    get shoppingCart() {
        return $('[data-test="shopping-cart-badge"]');
    }
    get burgerMenu() {
        return $('#react-burger-menu-btn');
    }
    get logout() {
        return $('#logout_sidebar_link');
    }

    async open() {
        return await super.open('inventory.html');
    }

    async addBackpackClick() {
        return await this.addBackpack.click();
    }

    async addBikeLightClick() {
        return await this.addBikeLight.click();
    }

    async shoppingCartClick() {
        return await this.shoppingCart.click();
    }

    async burgerMenuClick() {
        return await this.burgerMenu.click();
    }

    async logoutClick() {
        return await this.logout.click();
    }
}

export default new HomePage();
