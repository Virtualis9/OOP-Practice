'use strict'

const Person = function(firstName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;




}

const chris = new Person('chris', 1991)
console.log(chris)

console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log( 2024 - this.birthYear)
}

chris.calcAge()
console.log(chris)

Person.prototype.sex = 'male';

console.log(chris)

console.log(chris.hasOwnProperty('firstName'))