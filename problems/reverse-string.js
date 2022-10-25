module.exports = function reverseString(string) {
  // Your code here
  if (typeof string != 'string') {
    throw new TypeError('Input must be a String!')
  } else {
    return string.split('').reverse().join('');
  }

};