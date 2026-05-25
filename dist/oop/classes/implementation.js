"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
// Creating an instance of the Person class.
// "person1" is an object with name, age, and isDeveloper values.
let person1 = new class_1.Person('James', 25, false);
// Calling a method from the object.
// The method returns a string, and console.log prints it.
console.log(person1.handShaeck());
