"use strict";
// Function that receives a message as a string
// and prints it in the console.
// The return type "void" means that the function
// does not return any value.
function printMessage(message) {
    console.log(message);
}
// Calling the function and sending a text message.
printMessage('Hello World!');
// Function that receives two numbers,
// adds them together, and returns the result.
// The return type "number" indicates that
// the function returns a numeric value.
function addition(number1, number2) {
    return number1 + number2;
}
// Storing the returned value of the addition function
// inside the variable "result".
let result = addition(80, 50);
// Printing the result in the console using
// a template literal.
console.log(`Result of addition: ${result}`);
