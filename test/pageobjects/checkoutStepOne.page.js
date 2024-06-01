import BasePage from './basePage.js';

class CheckoutStepOne extends BasePage {
    get firstName() {
        return $('#first-name');
    }
    get lastName() {
        return $('#last-name');
    }
    get zip() {
        return $('#postal-code');
    }
    get continueBnt() {
        return $('#continue');
    }

    async fillCheckout(firstName, lastName, zip) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.zip.setValue(zip);
    }

    async continueBntClick() {
        return await this.continueBnt.click();
    }
}

export default new CheckoutStepOne();
