// Interface that defines the structure of a Person object.
// Any object of type Person MUST have these properties.
interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}

// Creating a single object that follows the Person interface.
// TypeScript ensures all required fields are present and correctly typed.
let person: Person = {
    name: 'Cal',
    age: 34,
    isDeveloper: true,
};

console.log('Person:', person);


// Creating an array of Person objects.
// Each element must respect the Person interface structure.
let persons: Person[] = [
    {name: 'Michael', age: 27, isDeveloper: false},
    {name: 'Lester', age: 28, isDeveloper: true},
    {name: 'Cal', age: 34, isDeveloper: true},
];

console.log('Persons:', persons);


// Interface that describes a function signature.
// This function must take two numbers and return a number.
interface Addition {
    (a: number, b: number): number;
}

// Implementing the Addition interface using an arrow function.
// TypeScript enforces that the function matches the interface signature.
let add: Addition = (a: number, b: number): number => {
    return a + b;
};

// Calling the function defined by the interface.
console.log(`Result of addition in the interface: ${add(8, 3)}`);