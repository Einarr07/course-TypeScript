// Declaring a string variable with an explicit type
let language: string = 'TypeScript';

// Declaring a number variable
let age: number = 25;

// Declaring a boolean variable
let isLanguage: boolean = true;

// Variable that can be either a string or undefined
// Currently it has no value, so it is undefined
let mount: string | undefined;

// Variable that can only contain null
let isNull: null = null;

// Template literal example using a string variable
console.log(`Hello world, ${language}`);