const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var self = this;
    return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
      return Math.max(max, self.calculateDepth(item));
    }, 0) : -1);
  }
};