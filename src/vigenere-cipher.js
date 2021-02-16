const CustomError = require("../extensions/custom-error");

function isUpperCase(letter) {
  var l = letter.charCodeAt();
  if (l > 64 && l < 91) {
    return true;
  } else {
    return false;
  }
}

function isLowerCase(letter) {
  let l = letter.charCodeAt();
  if (l > 96 && l < 123) {
    return true;
  } else {
    return false;
  }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    let encrypted = "";
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let currentLetter = message[i];
      const A = 65;
      const a = 97;

      if (isUpperCase(currentLetter)) {
        let Pi = (currentLetter.charCodeAt(0) - A);
        let Ki = (key[j % key.length].toUpperCase().charCodeAt() - A);
        let upperLetter = mod(Pi + Ki, 26);

        encrypted += String.fromCharCode(upperLetter + A);

        j++;
      } else if (isLowerCase(currentLetter)) {
        let Pi = (currentLetter.charCodeAt() - a);
        let Ki = (key[j % key.length].toLowerCase().charCodeAt() - a);
        let lowerLetter = mod(Pi + Ki, 26);

        encrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        encrypted += currentLetter;
      }
    }
    return this.reverse ? encrypted.toUpperCase() : encrypted.split('').reverse().join('').toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    let decrypted = "";
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let currentLetter = encryptedMessage[i];
      const A = 65;
      const a = 97;

      if (isUpperCase(currentLetter)) {
        let Ci = (currentLetter.charCodeAt(0) - A);
        let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
        let upperLetter = mod(Ci - Ki, 26);

        decrypted += String.fromCharCode(upperLetter + A);

        j++;
      } else if (isLowerCase(currentLetter)) {
        let Ci = (currentLetter.charCodeAt(0) - a);
        let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
        let lowerLetter = mod(Ci - Ki, 26);

        decrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        decrypted += currentLetter;
      }
    }
    return this.reverse ? decrypted.toUpperCase() : decrypted.split('').reverse().join('').toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;
