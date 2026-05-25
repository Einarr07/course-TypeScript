"use strict";
// With the character "?" we can indicate that
// a parameter is optional.
// In this case, "name" is required
// but "hand" is optional.
function handShake(name, hand) {
    // If the optional parameter exists,
    // return the custom greeting.
    if (hand) {
        return `${hand}, ${name}`;
    }
    // Otherwise, return a default greeting.
    return `Hello, ${name}!`;
}
// Calling the function without the optional parameter.
console.log(handShake('Jason'));
// Calling the function with both parameters.
console.log(handShake('Lucia', 'Good morning'));
// Rest parameters (...)
// This allows the function to receive
// multiple numbers as an array.
function additionAlls(...numbers) {
    // The reduce() method is used to sum
    // all values inside the array.
    return numbers.reduce((accumulated, actual) => accumulated + actual, 0);
}
// Printing the result of adding all numbers.
console.log(`The result of addition alls is: ${additionAlls(1, 2, 3, 4, 5)}`);
// Default values
// "sayBye" will use "Good bye"
// if no value is provided.
function goodBye(name, sayBye = 'Good bye') {
    return `${sayBye}, ${name}`;
}
// Printing a visual separator.
console.log('-------- Good bye --------');
// Calling the function using the default value.
console.log(goodBye('THING #1'));
// Calling the function with a custom goodbye message.
console.log(goodBye('THING #2', 'See you later'));
