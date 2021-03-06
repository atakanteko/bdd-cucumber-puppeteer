/**
 * Sets the value of an input, textarea or select element.
 * @param {String} selector The selector of the element to set the value of.
 * @param {String} value The value to set on the element.
 */

module.exports = async function(selector, value) {
    const valueToSet = value ? value : '';
    await this.page.type(selector, valueToSet)
}
