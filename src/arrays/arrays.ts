// STRING ARRAY
// An array that only accepts string values
let names: string[] = ['Norma', 'Jason', 'Lucia', 'Michael', 'Franklin', 'Lester', 'Trevor', 'Wade'];

console.log(`Names: ${names}`);


// NUMBER ARRAY
// An array that only accepts numbers
let ages: number[] = [23, 24, 25, 26, 25, 27, 28, 29];

console.log(`Ages: ${ages}`);


// ANY ARRAY
// An array that can contain values of different types
// Using 'any' removes type safety (not recommended in real projects)
let mix: any[] = ['Carmen', 98, true];

console.log(`Mix: ${mix}`);


// ------------------------------------
// ARRAY OF OBJECTS USING AN INTERFACE
// ------------------------------------

// Defining an interface to describe the shape of a Person object
interface Person {
    name: string;        // Person's name (string)
    age: number;         // Person's age (number)
    isDeveloper: boolean; // Indicates if the person is a developer (boolean)
}

// Creating an array of Person objects
// Each object must follow the Person structure
let people: Person[] = [
    { name: 'Jorge', age: 26, isDeveloper: false },
];

console.log('Initial list', people);

// Adding a new Person object to the array
// TypeScript ensures the object matches the Person interface
people.push({ name: 'Lucas', age: 30, isDeveloper: true });

console.log(`Persons: ${JSON.stringify(people, null, 2)}`);


// --------
// TUPLE
// --------

// A tuple is a fixed-length array with fixed types in specific positions
// Position 0 -> string
// Position 1 -> number
// Position 2 -> boolean
let animals: [string, number, boolean];

// Assigning values respecting the exact order and types
animals = ['Dog', 5, true];

console.log('Animal:', animals);


// ----------------
// ENUMERATIONS
// ----------------

// An enum is a way to define a set of named constant values
// Here we are using a string enum
enum Week {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
}

// Creating a variable that can only contain values from the Week enum
let dayMonday: Week = Week.Monday;

console.log('Day', dayMonday);