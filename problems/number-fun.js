const chai = require('chai');
const { expect } = require('chai');



function returnsThree() {
  return 3;
}



function reciprocal(n) {
  if (n < 1 || n > 1000000 || typeof n != 'number') {
    throw new TypeError("N must be greater than 1, smaller than 1,000,000 and a number.")
  } else {
    return 1/n;
  }
}





module.exports = {
  returnsThree,
  reciprocal
};