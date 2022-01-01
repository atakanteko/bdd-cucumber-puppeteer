/**
 * Determine if an element is visible.
 * @param {String} selector CSS selector of the element.
 * @param {String} hiddenPresetWaitForSelectorOption
 * Null when checking for visible, otherwise checking for hidden.
 */

module.exports = async function(selector, hiddenPresetWaitForSelectorOption) {
    const visibilityProp = hiddenPresetWaitForSelectorOption ? 'hidden' : 'visible';
    const options = {
        'hidden' : hiddenPresetWaitForSelectorOption,
        'visible' : !hiddenPresetWaitForSelectorOption
    };
    await this.page.waitForSelector(selector, options);
}
