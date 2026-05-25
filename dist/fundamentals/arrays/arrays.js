"use strict";
// STRING ARRAY
// An array that only accepts string values
let names = ['Norma', 'Jason', 'Lucia', 'Michael', 'Franklin', 'Lester', 'Trevor', 'Wade'];
console.log(`Names: ${names}`);
// NUMBER ARRAY
// An array that only accepts numbers
let ages = [23, 24, 25, 26, 25, 27, 28, 29];
console.log(`Ages: ${ages}`);
// ANY ARRAY
// An array that can contain values of different types
// Using 'any' removes type safety (not recommended in real projects)
let mix = ['Carmen', 98, true];
console.log(`Mix: ${mix}`);
// Creating an array of Person objects
// Each object must follow the Person structure
let people = [
    { name: 'Jorge', age: 26, isDeveloper: false },
];
console.log('Initial list', people);
// Adding a new Person object to the array
// TypeScript ensures the object matches the Person interface
people.push({ name: 'Lucas', age: 30, isDeveloper: true });
console.log(`Persons: ${JSON.stringify(people, null, 2)}`);
// --------
// TUPLE
// --------
// A tuple is a fixed-length array with fixed types in specific positions
// Position 0 -> string
// Position 1 -> number
// Position 2 -> boolean
let animals;
// Assigning values respecting the exact order and types
animals = ['Dog', 5, true];
console.log('Animal:', animals);
// ----------------
// ENUMERATIONS
// ----------------
// An enum is a way to define a set of named constant values
// Here we are using a string enum
var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday";
})(Week || (Week = {}));
// Creating a variable that can only contain values from the Week enum
let dayMonday = Week.Monday;
console.log('Day', dayMonday);
