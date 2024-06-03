import loginPage from '../pageobjects/login.page.js';
import credentials from '../helpers/credentials.js';
import homePage from '../pageobjects/home.page.js';

describe('Footer', () => {
    it('Footer Links', async () => {
        await loginPage.open();
        await loginPage.login(credentials.getUserCredentials('standard'));

        await homePage.facebookClick();
        let windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);
        await expect(await browser.getUrl()).toContain('https://www.facebook.com/saucelabs');

        await browser.switchToWindow(windowHandles[0]);
        await homePage.xClick();
        windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);
        await expect(await browser.getUrl()).toContain('https://x.com/saucelabs');

        await browser.switchToWindow(windowHandles[0]);
        await homePage.linkedinClick();
        windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);
        await expect(await browser.getUrl()).toContain('https://www.linkedin.com/company/sauce-labs/');
    });
});
