const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (options.addition === null) {
    options.addition = 'null';
  }

  const addition = new Array(options.additionRepeatTimes)
                            .fill(options.addition)
                            .join(options.additionSeparator);

  const repeateStr = new Array(options.repeatTimes)
                              .fill(str + addition)
                              .join(options.separator);

  return repeateStr;
};
