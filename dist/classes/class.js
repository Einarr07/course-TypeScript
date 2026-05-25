"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
    handShaeck() {
        return `Hello World, my name is ${this.name} and I am ${this.age} years old`;
    }
}
exports.Person = Person;
