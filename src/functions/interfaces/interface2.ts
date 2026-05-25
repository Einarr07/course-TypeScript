// Interface that defines an address-like structure.
// "city" is optional, meaning it may or may not exist.
interface Direction {
    street: string;
    number: number;
    city?: string;
}

let direction: Direction = {
    street: 'December 6',
    number: 5
};

console.log(direction);


// Interface with readonly properties.
// "readonly" means values cannot be modified after creation.
interface Animal {
    readonly name: string;
    readonly race: string;
    readonly age: number;
}

let dog: Animal = {
    name: 'Svanna',
    race: 'Wolf',
    age: 7,
};

console.log(dog);

// dog.name = "Other name"; ❌ Not allowed (readonly)


// Extended interface
interface Pet extends Animal {
    readonly type: string;
}

let pet: Pet = {
    name: 'Speki',
    race: 'Wolf',
    age: 6,
    type: 'Dog'
};

console.log(pet);