// Your code here
const Person = require('../problems/person');
const chai = require('chai');
const expect = chai.expect;


describe('Person function', () => {

    beforeEach(() => {
    person1 = new Person("Santa", 33);
    person2 = new Person("Elf", 21);

    })

    it('Person Constructor should have name and age properties ', () => {

        expect(person1).to.have.property("name");
        expect(person1).to.have.property("age");
    });
    describe("Methods should: ", () => {
        it('Should call the sayHello method', () => {
            expect(person1.sayHello()).to.equal(`Hello, Santa good to see you!`);
        })
    });

    describe("Update Object", () => {
        it("Should output TypeError if not an object.", () => {
            let notObject = "A String";
            expect(() => person1.update(notObject).to.throw(TypeError, "update() only takes an object as an argument."));
        })
        it("Should update the obj with the new name and age", () => {
            person1.update(person2)
            expect(person1.name).to.eql(person2.name);
            expect(person1.age).to.eql(person2.age);
        })
        it("Should return a TyeError if the obj does not have a name or age property.", () => {
            let badInput1 = {name: 'name'};
            let badInput2 = {age: 23};
            expect(() => person1.update(badInput1).to.throw(TyperError, "Update() only takes an object with both anem and age properties."));
            expect(() => person1.update(badInput2).to.throw(TyperError, "Update() only takes an object with both anem and age properties."))
        })

    });

    describe("greetAll() Method", () => {
        it("greetAll() should return an array with SayHello called on each obj of array", () => {
            expect(Person.greetAll([person1, person2])).to.eql(['Hello, Santa good to see you!','Hello, Elf good to see you!'])
        })
    })


});
    