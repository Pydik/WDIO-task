export default class BasePage {
    async open(path) {
        return await browser.url(`https://www.saucedemo.com/${path}`);
    }
}
