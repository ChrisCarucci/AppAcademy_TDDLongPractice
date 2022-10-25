const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Triangle = require("../problems/triangle");


let triangle1, triangle2
let side11, side12, side13;

describe("Triangle class", () => {
    
  beforeEach(() => {     
    side11 = 2;
    side12 = 3;
    side13 = 4;
    triangle1 = new Triangle(side11, side12, side13); 
    triangle2 = new Triangle(side13, side12, side11); 
    triangleInvalidEq = new Triangle(1, 2, 3); 
    triangleInvalidNEq = new Triangle(1, 2, 4); 

  });
  afterEach(() => {
    //chai.spy.restore(person2);
  });
  
  it('should have properties side1, side2, and side3', () => {
    expect(triangle1).to.have.property('side1',side11);
    expect(triangle1).to.have.property('side2',side12);
    expect(triangle1).to.have.property('side3',side13);
  });

  it('should getPerimeter() method working', () => {
    expect(triangle1.getPerimeter()).to.equal(9);
  });

  it('should hasValidSideLengths() returns true on valid sides', () => {
    expect(triangle1.hasValidSideLengths()).to.be.true;
  });
  it('should hasValidSideLengths() returns false on invalid sides', () => {
    expect(triangleInvalidEq.hasValidSideLengths()).to.be.false;
    expect(triangleInvalidNEq.hasValidSideLengths()).to.be.false;
  });  
  it('should not have isValid property before validate() called', () => {
    expect(triangle1).to.not.have.property('isValid');    
  });
  
  it('should have isValid property after validate() call with true/false', () => {    
    triangle1.validate()
    triangleInvalidEq.validate()
    triangleInvalidNEq.validate()
    expect(triangle1).to.have.property('isValid', true);
    expect(triangleInvalidEq.isValid).to.be.false;
    expect(triangleInvalidNEq.isValid).to.be.false;                
  });  

  it('getValidTriangles() static should return valid triangles from any number of args', () => {    
    
    triangle1.validate()
    triangleInvalidEq.validate()
    triangleInvalidNEq.validate()
    expect(Triangle.getValidTriangles(triangle1, triangleInvalidEq, triangleInvalidNEq, triangle2)).to
          .eql([triangle1, triangle2]);                
  });  

});

