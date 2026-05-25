"use strict";
// Variable with an explicit string type.
// TypeScript will not allow assigning a number or boolean to this variable.
let name1 = "Pepito Alcachofa";
// Strings have a length property, so we can read how many characters they have.
console.log(name1.length);
// Generic function with a constraint:
// T can be any type, but it must have a length property of type number.
// This works with strings, arrays, and other objects that have length.
function getLength(obj) {
    // Because of the constraint, TypeScript knows obj.length exists.
    let length = obj.length;
    // typeof shows the JavaScript type at runtime.
    let type = typeof obj;
    console.log(`The type of date is: '${type}' and length is: ${length}`);
    return length;
}
// A string works because it has a length property.
console.log(getLength("I'm a string"));
// An array also works because arrays have a length property.
console.log(getLength([1, 2, 3, 4, 5, 6, 7, 8]));
