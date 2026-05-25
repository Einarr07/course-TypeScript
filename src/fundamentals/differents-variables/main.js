// Any variable
var variableAny;
//variableAny = 'Hello';
//variableAny = 4;
variableAny = false;
console.log("Any variable: ".concat(variableAny));
// Unknown variable
var variableUnknow;
//variableUnknow = true;
//variableUnknow = 98;
variableUnknow = 'Excellent';
if (typeof variableUnknow === 'string') {
    console.log("Unknown variable is to string: ".concat(variableUnknow));
}
// Void
var logMessage = function (message) {
    console.log("Log: ".concat(message));
};
logMessage('Never stop of lear');
// Never
function throwError(message) {
    throw new Error(message);
}
throwError('This is a error function');
