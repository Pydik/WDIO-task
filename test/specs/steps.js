const { Given, When, Then } = require('@cucumber/cucumber');

import loginPage from '../pageobjects/login.page';

Given(/^User is located on the main page of saucedemo website$/, async page => {
    await loginPage.open();
});

When(/^User click Login button$/, async page => {
    await loginPage.Login();
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async page => {
    await expect(await loginPage.error).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
