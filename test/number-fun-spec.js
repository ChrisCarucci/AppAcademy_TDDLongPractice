// Your code here
const chai = require("chai");
const { expect } = require("chai");
const numberFun = require('../problems/number-fun')




describe('function returnsThree', () => {
    let returnsThree = numberFun.returnsThree
    it ('returns 3 on any input', () => {
      expect(returnsThree(3)).to.equal(3)
      expect(returnsThree(-1000)).to.equal(3)
      expect(returnsThree('string')).to.equal(3)
      expect(returnsThree(null)).to.equal(3)
      expect(returnsThree({})).to.equal(3)
    })
  })


describe('function reciprocal (1/x, x from 1 to 1.000.000)', () => {
    let reciprocal = numberFun.reciprocal
  
    context('Contextual padding goes here', () => {    
      it ('returns 1/n on number input', () => {
        expect(reciprocal(4)).to.equal(1/4)
        expect(reciprocal(125.5)).to.equal(1/125.5)
        expect(reciprocal(1000000)).to.equal(1/1000000)    
      })
    })
});