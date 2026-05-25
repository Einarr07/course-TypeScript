// Generic function:
// The <T> is a type variable. It lets the function work with any type.
// The same T is used for the parameter and the return value, so TypeScript
// knows the function returns the same type that it receives.
function identity<T>(arg: T): T {
    return arg;
}

// Here T is string, so identity receives a string and returns a string.
let output1 = identity<string>('Hello World');

console.log(`This is a string with generic form: ${output1}`);

// Here T is number, so identity receives a number and returns a number.
let output2 = identity<number>(2);

console.log(`This is a number with generic form: ${output2}`);

// Generic class:
// Box<T> can store one value of any type.
// The type is chosen when we create a new Box.
class Box<T> {
    // content has type T, so it must match the type used by the Box.
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    // This method returns T because it returns the stored content.
    public getContent() {
        return this.content;
    }
}

// This creates a Box where T is string.
// Because of that, the content must be a string.
let stringBox = new Box<string>("I'm a string'");
console.log(stringBox.getContent());
