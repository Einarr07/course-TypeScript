"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.add = add;
exports.rest = rest;
exports.multiplication = multiplication;
exports.division = division;
function add(number1, number2) {
    return number1 + number2;
}
function rest(number1, number2) {
    return number1 - number2;
}
function multiplication(number1, number2) {
    return number1 * number2;
}
function division(number1, number2) {
    return number1 / number2;
}
const PI = 3.14151617;
exports.PI = PI;
