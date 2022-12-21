'use strict';

const Person = function(firtName, birthYear){
    // Instance properties
    this.firstName = firtName;
    this.birthYear = birthYear;
}

const jonas = new Person ('Jonas', 1991)
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)

//Prototypes
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();