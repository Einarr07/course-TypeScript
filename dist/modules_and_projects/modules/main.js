"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
console.log(`Result of addition: ${(0, calculator_1.add)(5, 6)}`);
console.log(`Result of rest: ${(0, calculator_1.rest)(800, 70)}`);
console.log(`Result of multiplication: ${(0, calculator_1.multiplication)(calculator_1.PI, 7)}`);
console.log(`Result of division: ${(0, calculator_1.division)(30, 15)}`);
console.log(`PI is equal to: ${calculator_1.PI}`);
