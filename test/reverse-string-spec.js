// Your code here
const { expect } = require("chai");
const chai = require("chai");
const reverseString = require('../problems/reverse-string');


describe("reverseString", function() {
    describe('Reverse String Function', function() {
        it ("Should reverse the string", function () {

        

        expect(reverseString('fun')).to.equal("nuf")
        });

        it ("Should throw an error if not a string", function() {
        expect(() => reverseString(1)).to.throw(TypeError, 'Input must be a String')
        })
    })

});
