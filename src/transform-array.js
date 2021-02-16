const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
          case '--discard-next':
              array.push('empty');
              i++;
              break;
          case '--discard-prev':
              array.pop();
              break;
          case '--double-next':
              if (i !== arr.length - 1) {
                array.push(arr[i + 1]);
              }
              break;
          case '--double-prev':
              if (i !== 0) {
                array.push(array[array.length - 1]);
              }
              break;
          default:
              array.push(arr[i]);
      }
  }        
  return array.filter(item => item !== 'empty');
};
