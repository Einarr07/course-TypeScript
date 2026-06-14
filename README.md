# Course TypeScript

This repository is a personal TypeScript learning notebook.

The goal is to keep small, clear examples that help remember TypeScript concepts and similar programming ideas: types,
arrays, interfaces, functions, classes, inheritance, generics, modules, DOM typing, decorators, mapped types, and testing.

## What This Project Is For

- Review TypeScript syntax quickly.
- Keep examples separated by topic.
- Practice how TypeScript checks types before JavaScript runs.
- Compare TypeScript source files with compiled JavaScript files.
- Remember how to compile and run TypeScript examples.

## Project Structure

```text
course-TypeScript/
  src/
    fundamentals/
      base-variables/       # Basic types (string, number, boolean, null, undefined)
      differents-variables/  # Special types (any, unknown, void, never)
      arrays/                # Arrays, tuples, and enums
    functions/
      interfaces/            # Object interfaces, function interfaces, optional & readonly
    oop/
      classes/               # Class creation, constructors, instances
      methods/               # Parameters, return types, optional/rest/default params
      extends/               # Generic constraints with extends
      generics/              # Generic functions and classes
      types_classes/         # Access modifiers (public, protected, private), inheritance
    modules_and_projects/
      modules/               # export/import with a calculator example
      dom/                   # DOM selection, HTML element typing, browser interaction
    advanced_concepts/
      decorators/            # Class decorators and interface merging
      types/                 # Mapped types, template literal types, conditional types
      fetch/                 # Fetch API with async/await, DOM type assertions
      jest/                  # Unit testing with Jest and ts-jest
  dist/                      # Compiled JavaScript output
  package.json
  tsconfig.json
  README.md
```

## Main Folders

### `src/fundamentals`

Basic TypeScript concepts.

- `base-variables/main.ts`: basic types like `string`, `number`, `boolean`, `undefined`, and `null`.
- `differents-variables/main.ts`: special types like `any`, `unknown`, `void`, and `never`.
- `arrays/arrays.ts`: arrays, arrays of objects, tuples, and enums.

### `src/functions`

Examples related to functions and interfaces.

- `interfaces/interface.ts`: object interfaces and function interfaces.
- `interfaces/interface2.ts`: optional properties, `readonly`, and interface extension.

### `src/oop`

Object-oriented programming examples.

- `classes/`: basic class creation, constructors, object instances, and methods.
- `methods/`: function parameters, return types, optional parameters, rest parameters, and default values.
- `extends/`: generic constraints using `extends`.
- `generics/`: generic functions and generic classes.
- `types_classes/`: class access modifiers like `public`, `protected`, and `private`, plus inheritance.

### `src/modules_and_projects`

Examples that connect multiple files or interact with the browser.

- `modules/`: `export` and `import` using a calculator example.
- `dom/`: DOM selection, HTML element typing, and browser interaction.

### `src/advanced_concepts`

Advanced TypeScript features and tooling.

- `decorators/decorators.ts`: class decorators that dynamically add methods to a class prototype, and interface merging to type those dynamic methods without shadowing.
- `types/types.ts`: mapped types (`CustomPartial`, `CustomReadOnly`), template literal types for generating string unions, and conditional types with `extends ? :` syntax.
- `fetch/main.ts`: using the Fetch API with `async`/`await` to call external APIs, DOM manipulation with type assertions (`as HTMLElement`), and event listeners with async callbacks.
- `jest/User.ts`: class with `private` access modifiers, encapsulation via public getter methods, default parameters, and `export` for module usage.
- `jest/User.test.ts`: unit testing with Jest — `describe` blocks, `test` cases, `beforeEach` setup, and matchers like `.toBe()`, `.toBeTruthy()`, and `.toBeFalsy()`.

## Important TypeScript Commands

### Create a TypeScript configuration

```bash
tsc --init
```

This creates `tsconfig.json`, where TypeScript compiler options are configured.

### Compile the whole project

```bash
pnpm run build
```

This runs:

```bash
tsc
```

`tsc` means TypeScript Compiler. It reads the `.ts` files and creates `.js` files.

In this project, `tsconfig.json` uses:

```json
"outDir": "dist"
```

That means compiled JavaScript files are sent to the `dist/` folder when the full project is compiled.

### Compile one TypeScript file

```bash
tsc src/fundamentals/base-variables/main.ts
```

This compiles only that file. Depending on how the command is used, TypeScript may create a `.js` file near the `.ts`
file.

### Run TypeScript directly with `tsx`

```bash
npx tsx src/fundamentals/base-variables/main.ts
```

`tsx` lets you run a TypeScript file directly without manually creating the JavaScript file first.

Use `tsx` when you want to test or practice quickly.

Use `tsc` when you want to compile TypeScript into JavaScript and check the project with the compiler.

### Run tests with Jest

```bash
pnpm test
```

This runs `jest --config src/advanced_concepts/jest/jest.config.js`, which executes all `*.test.ts` files using `ts-jest`.

## TypeScript vs JavaScript Files

- `.ts` files are the TypeScript source files you write.
- `.js` files are JavaScript files created after compilation.
- TypeScript helps catch errors before running the code.
- JavaScript is what Node.js or the browser finally executes.

Example:

```text
main.ts  -> written by you
main.js  -> generated after compiling
```

## Current Compiler Configuration

The project uses `tsconfig.json` with these important options:

- `target: "es2016"`: compile JavaScript compatible with ES2016.
- `module: "commonjs"`: use CommonJS module format.
- `strict: true`: enable strict type checking.
- `outDir: "dist"`: place compiled files in the `dist` folder.
- `include: ["src"]`: compile files inside `src`.

> **Note:** The `src/advanced_concepts/fetch/` folder has its own `tsconfig.json` that adds `"lib": ["es5", "dom", "es2015.promise"]` — this is needed because that code runs in a browser and uses DOM APIs like `document` and `fetch`.

## Learning Notes

### Type annotations

Type annotations tell TypeScript what kind of value a variable, parameter, or return value should have.

```ts
let age: number = 25;
let language: string = 'TypeScript';
```

### Optional chaining

Optional chaining `?.` helps avoid errors when a value can be `null` or `undefined`.

```ts
console.log(h1?.textContent);
```

### DOM element types

When using `document.querySelector`, TypeScript does not always know the exact HTML element type.

For example, an input has a `placeholder` property, but a generic `Element` does not.

```ts
const message = document.querySelector<HTMLInputElement>('#message');
console.log(message?.placeholder);
```

### Interfaces

Interfaces describe the shape of an object or function.

```ts
interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}
```

### Classes

Classes are templates for creating objects.

```ts
class Person {
    constructor(public name: string) {
    }
}
```

### Generics

Generics allow code to work with different types while keeping type safety.

```ts
function identity<T>(value: T): T {
    return value;
}
```

### Mapped Types

Mapped types create new types by transforming each property of an existing type.

```ts
type CustomPartial<T> = {
    [K in keyof T]?: T[K];
};
```

### Template Literal Types

Template literal types build new string types by combining unions with string interpolation.

```ts
type Variants = 'Little' | 'Medium';
type ClassCSS = `button-${Variants}`; // "button-Little" | "button-Medium"
```

### Conditional Types

Conditional types choose a type dynamically based on a condition, like a ternary for types.

```ts
type IsNumber<T> = T extends number ? true : false;
```

### Decorators

Decorators are functions that modify or extend classes, methods, or properties at definition time.

```ts
function MyDecorator(target: Function) {
    target.prototype.newMethod = () => 'added by decorator';
}

@MyDecorator
class MyClass {}
```

### Async/Await with Fetch

`async`/`await` simplifies working with Promises, making asynchronous code look synchronous.

```ts
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return await response.json();
};
```

### Unit Testing with Jest

Jest is a testing framework. `ts-jest` allows Jest to run TypeScript files directly.

```ts
describe('MyClass', () => {
    test('should return the correct value', () => {
        expect(myFunction()).toBe('expected');
    });
});
```

## Recommended Study Flow

1. Start with `src/fundamentals/base-variables/main.ts`.
2. Continue with arrays and special types.
3. Study interfaces in `src/functions/interfaces`.
4. Practice methods and classes in `src/oop`.
5. Review modules with `src/modules_and_projects/modules`.
6. Study DOM typing in `src/modules_and_projects/dom`.
7. Learn mapped types, template literals, and conditional types in `src/advanced_concepts/types`.
8. Practice the Fetch API with `src/advanced_concepts/fetch`.
9. Explore class decorators in `src/advanced_concepts/decorators`.
10. Finish with unit testing in `src/advanced_concepts/jest`.

## Useful Commands

```bash
pnpm install                                          # Install dependencies
pnpm run build                                        # Compile the full project
pnpm test                                             # Run Jest tests
npx tsx src/fundamentals/base-variables/main.ts       # Run a single file quickly
```

## Notes For This Repository

This is a learning repository, so comments inside the `.ts` files are intentionally explanatory.

Some examples are designed to show TypeScript errors when lines are uncommented. Those comments are useful because they
explain what TypeScript allows and blocks.

When practicing, prefer changing one file at a time and running either `npx tsx <file>` for quick execution or
`pnpm run build` to check the complete project.
