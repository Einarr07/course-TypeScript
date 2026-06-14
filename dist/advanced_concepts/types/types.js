"use strict";
// ==========================================
// Advanced TypeScript: Mapped Types
// ==========================================
// Mapped Types allow you to create new types based on existing ones.
// They act like a "map" function for types, transforming each property of an existing type.
Object.defineProperty(exports, "__esModule", { value: true });
// The mapped structure of PartialPerson is equivalent to:
// type PartialPerson = {
//     name?: string;
//     age?: number;
// }
// Example of PartialPerson usage (notice we can omit the 'age' property):
let partialPerson = {
    name: 'Jason'
};
// The mapped structure of ReadOnlyPerson is equivalent to:
// type ReadOnlyPerson = {
//     readonly name: string;
//     readonly age: number;
// }
let person = {
    name: 'Jason',
    age: 35
};
// Example showing that read-only properties cannot be reassigned:
// person.name = 'Mateo'; // Error: Cannot assign to 'name' because it is a read-only property.
console.log('Person:', person);
console.log('Partial Person:', partialPerson);
let littleButton = "button-Little";
// Using the conditional type as the return type of a function.
// TypeScript needs a type assertion (as IsNumber<T>) because it cannot evaluate the runtime check `typeof value === 'number'` in type-land automatically.
function isNumber(value) {
    return (typeof value === 'number');
}
// result1 has type: true (since 23 is a number)
const result1 = isNumber(23);
// result2 has type: false (since 'No' is a string)
const result2 = isNumber('No');
console.log('Template literal variable:', littleButton);
console.log('Is 23 a number?', result1);
console.log('Is "No" a number?', result2);
