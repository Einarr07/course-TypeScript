// ANY TYPE
// The 'any' type disables TypeScript type checking.
// It can hold ANY value (string, number, boolean, etc.)
let variableAny: any;

// variableAny = 'Hello';
// variableAny = 4;
variableAny = false;

console.log(`Any variable: ${variableAny}`);


// UNKNOWN TYPE
// The 'unknown' type is safer than 'any'.
// You must check its type before using it.
let variableUnknow: unknown;

// variableUnknow = true;
// variableUnknow = 98;
variableUnknow = 'Excellent';

// Type checking before using the variable
if (typeof variableUnknow === 'string') {
    console.log(`Unknown variable is a string: ${variableUnknow}`);
}


// VOID TYPE
// 'void' means the function does not return anything.
const logMessage = (message: string): void => {
    console.log(`Log: ${message}`);
};

logMessage('Never stop learning');


// NEVER TYPE
// 'never' means the function NEVER finishes normally.
// It either throws an error or runs infinitely.
function throwError(message: string): never {
    throw new Error(message);
}

// This will stop execution because it throws an error
throwError('This is an error function');