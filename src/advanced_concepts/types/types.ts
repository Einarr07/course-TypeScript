// ==========================================
// Advanced TypeScript: Mapped Types
// ==========================================
// Mapped Types allow you to create new types based on existing ones.
// They act like a "map" function for types, transforming each property of an existing type.

// 1. Defining a base type representing a person
type TypePerson = {
    name: string;
    age: number;
};

// 2. Custom implementation of a Partial type mapper.
// Mapped types use the `in keyof` syntax to iterate through all keys of a type.
// Note: To make properties optional, we MUST add the `?` modifier.
type CustomPartial<T> = {
    // For every key (K) in the keys of T, make it optional (?) and keep its original type T[K]
    [K in keyof T]?: T[K];
};

type PartialPerson = CustomPartial<TypePerson>;

// The mapped structure of PartialPerson is equivalent to:
// type PartialPerson = {
//     name?: string;
//     age?: number;
// }

// Example of PartialPerson usage (notice we can omit the 'age' property):
let partialPerson: PartialPerson = {
    name: 'Jason'
};


// 3. Custom implementation of a ReadOnly type mapper.
// Here we prepend the `readonly` modifier to make every property immutable.
type CustomReadOnly<T> = {
    // For every key (K) in the keys of T, prepend 'readonly' to make it read-only
    readonly [K in keyof T]: T[K];
};

type ReadOnlyPerson = CustomReadOnly<TypePerson>;

// The mapped structure of ReadOnlyPerson is equivalent to:
// type ReadOnlyPerson = {
//     readonly name: string;
//     readonly age: number;
// }

let person: ReadOnlyPerson = {
    name: 'Jason',
    age: 35
};

// Example showing that read-only properties cannot be reassigned:
// person.name = 'Mateo'; // Error: Cannot assign to 'name' because it is a read-only property.

console.log('Person:', person);
console.log('Partial Person:', partialPerson);

// Exporting an empty object to treat this file as a module and avoid namespace collision
export {};


// ==========================================
// Advanced TypeScript: Template Literal Types
// ==========================================
// Template Literal Types build on string literal types and allow you to construct new string types
// by combining union types with string interpolation (similar to ES6 template strings in JavaScript).

type Variants = 'Little' | 'Medium';

// This generates a union of all possible combinations: "button-Little" | "button-Medium"
type ClassCSS = `button-${Variants}`;

let littleButton: ClassCSS = "button-Little";
// let invalidButton: ClassCSS = "button-Large"; // Error: Type '"button-Large"' is not assignable to type 'ClassCSS'.


// ==========================================
// Advanced TypeScript: Conditional Types
// ==========================================
// Conditional Types choose a type dynamically based on a condition, working like ternary operators (condition ? true : false) in type space.
// Syntax: T extends U ? X : Y

// If generic T extends (is assignable to) number, the resulting type is true; otherwise, it is false.
type IsNumber<T> = T extends number ? true : false;

// Using the conditional type as the return type of a function.
// TypeScript needs a type assertion (as IsNumber<T>) because it cannot evaluate the runtime check `typeof value === 'number'` in type-land automatically.
function isNumber<T>(value: T): IsNumber<T> {
    return (typeof value === 'number') as IsNumber<T>;
}

// result1 has type: true (since 23 is a number)
const result1 = isNumber(23);

// result2 has type: false (since 'No' is a string)
const result2 = isNumber('No');

console.log('Template literal variable:', littleButton);
console.log('Is 23 a number?', result1);
console.log('Is "No" a number?', result2);