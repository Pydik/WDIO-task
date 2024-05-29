export default class BasePage {
    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}