import BasePage from './basePage.js';

class HomePage extends BasePage {
    get addBackpack() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get addBikeLight() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }
    get shoppingCartLink() {
        return $('.shopping_cart_link');
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

    get x() {
        return $('[data-test="social-twitter"]');
    }

    get facebook() {
        return $('[data-test="social-facebook"]');
    }

    get linkedin() {
        return $('[data-test="social-linkedin"]');
    }

    get sortByAZ() {
        return $('[class="product_sort_container"] [value="az"]');
    }

    get sortByZA() {
        return $('[class="product_sort_container"] [value="za"]');
    }

    get sortByLoHi() {
        return $('[class="product_sort_container"] [value="lohi"]');
    }

    get sortByHiLo() {
        return $('[class="product_sort_container"] [value="hilo"]');
    }

    get inventoryItemPrice() {
        return $$('.inventory_item_price');
    }

    get inventoryItemName() {
        return $$('.inventory_item_name');
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

    async xClick() {
        return await this.x.click();
    }

    async facebookClick() {
        return await this.facebook.click();
    }

    async linkedinClick() {
        return await this.linkedin.click();
    }

    async sortByAZClick() {
        return await this.sortByAZ.click();
    }

    async sortByZAClick() {
        return await this.sortByZA.click();
    }

    async sortByHiLoClick() {
        return await this.sortByHiLo.click();
    }

    async sortByLoHiClick() {
        return await this.sortByLoHi.click();
    }
}

export default new HomePage();
