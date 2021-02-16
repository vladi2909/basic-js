const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {

  if (Array.isArray(arr) === false) { return false }
   
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr[i] = arr[i].trim().toUpperCase();
      str += arr[i][0];
    }
  }

  let nameTeam = str.split('').sort().join('');

  return nameTeam;
  
};
