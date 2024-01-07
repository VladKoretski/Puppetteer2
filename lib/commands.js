//const { expect } = require("chai");

module.exports = {
  //click элемента по селектору
  clickElement: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector is not clickable: ${selector}`);
    }
  },

  //click нескольких элементов
  clickSetOfChairs: async function (elements, numberOfChairs, firstChair) {
    try {
      const upLevel = firstChair + numberOfChairs;
      for (let i = firstChair; i < upLevel; i++) {
        await elements[i].click();
      }
    } catch (error) {
      throw new Error(`There is no chair to pick out: ${elements}`);
    }
  },
};
