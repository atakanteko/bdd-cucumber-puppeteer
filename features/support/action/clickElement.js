/**
 * this javascript file responsible about clicks on an item
 * @param {String} selector         --> CSS selector of the item to click
 * @param {String} waitForSelector
 * */
module.exports = async function(selector, waitForSelector) {
    // wait until the given selector exists
    if (waitForSelector){
        await this.page.waitForSelector(waitForSelector)
    }
    await this.page.click(selector)
}
