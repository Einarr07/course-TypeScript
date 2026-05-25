export class Person {
    // These are properties of the class.
    // Every Person object will have a name, age, and developer status.
    name: string;
    age: number;
    isDeveloper: boolean;

    // The constructor runs when we create a new Person.
    // It receives the values and saves them inside the object.
    constructor(name: string, age: number, isDeveloper: boolean) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    // Method of the class.
    // It can use "this" to read the properties of the current object.
    handShaeck(): string {
        return `Hello World, my name is ${this.name} and I am ${this.age} years old`;
    }
}
