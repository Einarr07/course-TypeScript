/**
 * Class Decorator.
 * Receives the constructor function of the decorated class as its argument (`target`).
 * In this case, the decorator extends the class behavior by dynamically adding
 * a method named `closing` to its prototype.
 */
function PersonDec(target: Function) {
    console.log(target);

    // Inject the 'closing' method into the class prototype
    target.prototype.closing = function (farewell: string) {
        return `${farewell}, ${this.name}`
    }
}

/**
 * Interface Merging in TypeScript.
 * Since the decorator adds the 'closing' method at runtime, TypeScript has
 * no static knowledge of its existence. We define this interface with the same
 * name as the class to notify the compiler that 'closing' exists, while avoiding
 * declaring it within the class body which would compile into constructor-based shadowing
 * (under standard ES class fields rules, initializing it to undefined).
 */
interface Person2 {
    closing(farewell: string): string;
}

// Apply the '@PersonDec' decorator to the 'Person2' class
@PersonDec
class Person2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    handshake(handshake: string): string {
        return `${handshake}, my name is ${this.name} and age is ${this.age}`;
    }
}

let user = new Person2('Amin', 42);
console.log(user.handshake('Hello'));
console.log(user.closing('Bye'));