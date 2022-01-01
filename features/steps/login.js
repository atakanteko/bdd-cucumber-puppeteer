const {Given, When, Then} = require('@cucumber/cucumber');
const openUrl = require('../support/action/openUrl')
const clickElement = require('../support/action/clickElement')
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
