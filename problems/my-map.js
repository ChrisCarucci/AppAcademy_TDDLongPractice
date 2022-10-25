const chai = require('chai');
const { expect } = require('chai');



function myMap(inputArray, cb) {
  // Your code here
  let newArray = [];

  for (const el of inputArray) {
    newArray.push(cb(el))
  }

  return newArray;
}




module.exports = myMap;