const CustomError = require("../extensions/custom-error");

module.exports = function countCats(str) {
  let total = 0;
  let cat = '^^';
  
  let arr = str.flat();
  for (let i = 0; i <= arr.length; i++) {
          if (arr[i] === cat) {
                  total++;
          }
  }

  return total;
};
