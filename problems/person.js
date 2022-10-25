class Person {
  // Your code here
  constructor(name, age) {
    this.name = name,
    this.age = age
  };

  sayHello = (name) => {
    return `Hello, ${this.name} good to see you!`;
  };

  visit = (otherPerson) => {
    return `${this.name} visited ${otherPerson.name}`;
  };

  switchVisit = (otherPerson) => {
    otherPerson.visit(this);
  };

  update = (obj) => {      
    if (typeof obj !== 'object') {
      throw TypeError('update() only takes an object as an argument.');
    } else if (!Object.keys(obj).includes('name') || !Object.keys(obj).includes('age') ) {
      throw TypeError('update() only takes an object with name and age properties');
    } else {
      this.name = obj.name;
      this.age = obj.age;
    }    
  };


  static greetAll = (arrayOfPeople) => {
    let newArray = [];
    for (const obj of arrayOfPeople) {
      newArray.push(obj.sayHello())
    }
    return newArray;
  };


  // greetAll(obj) static method - this will intake an array of Person instances. The greetAll
  // method will then call the sayHello() method on each Person instance and store each returned 
  // string in an array, before finally returning an array of the stored strings.



};







module.exports = Person;