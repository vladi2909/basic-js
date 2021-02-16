const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  str: '',

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    }

    this.arr = [];
    throw new Error();
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.str = this.arr.map(item => `~( ${item} )~`).join('');
    this.arr = [];
    return this.str = this.str.substring(1, this.str.length - 1);
  }
};

module.exports = chainMaker;
