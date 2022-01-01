/**
 * Wait for a selector to exist.
 * @param {String} selector The selector to wait for.
 */
module.exports = async function(selector) {
    await this.page.waitForSelector(selector)
}
