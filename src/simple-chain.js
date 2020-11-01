const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;  
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length) {
      this.chain=[]
      throw new Error();
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    finalChain = this.chain.join`~~`
    this.chain=[]
    return finalChain;
  },
  chain: []
};


module.exports = chainMaker;
