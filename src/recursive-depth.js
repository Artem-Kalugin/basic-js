const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr,number=0) {
    arr.forEach(element => {
      if (Array.isArray(element)) number = Math.max(this.calculateDepth(element), number);
    });
    return ++number;
  }
};