import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import credentials from '../helpers/credentials.js';

describe('Products', () => {
    it('Sorting', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));

        await homePage.sortByLoHiClick();

        const pricesLoHi = await $$('[class="inventory_item_price"]');
        const priceValuesLoHi = [];

         for (let priceElement of pricesLoHi) {
            const priceText = await priceElement.getText();
            const price = parseFloat(priceText.replace('$', '').replace(',', ''));
            priceValuesLoHi.push(price);
        }

        await homePage.sortByHiLoClick();

        const pricesHiLo = await $$('.inventory_item_price');
        const priceValuesHiLo = [];

        for (let priceElement of pricesHiLo) {
            const priceText = await priceElement.getText();
            const price = parseFloat(priceText.replace('$', '').replace(',', ''));
            priceValuesHiLo.push(price);
        }

        await homePage.sortByAZClick()
        const productsAZ = await $$('.inventory_item_name');

        const productNamesAZ = [];
        for (let product of productsAZ) {
            productNamesAZ.push(await product.getText());
        }

        const sortedNamesAZ = [...productNamesAZ].sort();
        expect(productNamesAZ).toEqual(sortedNamesAZ);

        await homePage.sortByZAClick()
        const productsZA = await $$('.inventory_item_name');

        const productNamesZA = [];
        for (let product of productsZA) {
            productNamesZA.push(await product.getText());
        }

        const sortedNamesZA = [...productNamesZA].sort((a, b) => b.localeCompare(a));
        expect(productNamesZA).toEqual(sortedNamesZA);
    });
});
