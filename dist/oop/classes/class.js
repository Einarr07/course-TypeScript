"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    // The constructor runs when we create a new Person.
    // It receives the values and saves them inside the object.
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
    // Method of the class.
    // It can use "this" to read the properties of the current object.
    handShaeck() {
        return `Hello World, my name is ${this.name} and I am ${this.age} years old`;
    }
}
exports.Person = Person;
