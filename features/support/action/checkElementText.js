const assert = require('assert').strict;
const waitForSelector = require('../action/waitForSelector');

/**
 * Checks an input, textarea or select element's text.
 * @param {String} selector CSS selector of the element whose value you're checking.
 * @param {Boolean} preset it is true when checking for equality, otherwise checking for inequality.
 * @param {String} text The value to check for.
 * @param {number} timeout The value for timeout.
 */

module.exports = async function(selector, preset, text, timeout = 30) {
    await waitForSelector.call(this,selector)

    const txtValue = await this.page.$eval(selector, el => el.textContent.toString().trim());
    const expectedValue = (text === undefined || text === null ) ? '' : text;
    assert(txtValue !== undefined, `Expected "${selector}" to have a value`);
    const msg = `Expected "${selector}" to ${preset ? 'have' : 'not have'} a value of "${expectedValue}" but actual value is "${txtValue}"`
    assert.strictEqual(txtValue === expectedValue, preset,msg)
}
