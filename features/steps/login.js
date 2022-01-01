const {Given, When, Then} = require('@cucumber/cucumber');
const openUrl = require('../support/action/openUrl')
const clickElement = require('../support/action/clickElement')
const waitForSelector = require('../support/action/waitForSelector')
const sendKeys = require('../support/action/sendKeys')
const checkElementText = require('../support/action/checkElementText')
const {url} = require('../global/commonData')

Given(/^that user on homepage$/, async function () {
    await openUrl.call(this, `${url}/index.html`);
});
When(/^user click signin button$/, async function () {
    await clickElement.call(this, "#signin_button","#signin_button")
});
Then(/^user should land to the login page$/, async function () {
    await openUrl.call(this,`${url}/login.html`)
});
Given(/^that user on login page$/, async function () {
    await openUrl.call(this,`${url}/login.html`)
});
Given(/^that "([^"]*)" input field filled with keyword "([^"]*)"$/, async function (element, value) {
    await waitForSelector.call(this, element)
    await sendKeys.call(this, element, value)
});
When(/^user select Login button$/, async function () {
    await clickElement.call(this, ".btn-primary", ".btn-primary")
});
Then(/^warning pop\-up with text should showed up$/, async function () {
    await checkElementText.call(this, ".alert-error",true,"Login and/or password are wrong.")
});
