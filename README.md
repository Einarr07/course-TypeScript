# Course TypeScript

This repository is a personal TypeScript learning notebook.

The goal is to keep small, clear examples that help remember TypeScript concepts and similar programming ideas: types,
arrays, interfaces, functions, classes, inheritance, generics, modules, and DOM typing.

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
      base-variables/
      differents-variables/
      arrays/
    functions/
      interfaces/
    oop/
      classes/
      methods/
      extends/
      generics/
      types_classes/
    modules_and_projects/
      modules/
      dom/
  dist/
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

## Important TypeScript Commands

### Create a TypeScript configuration

```bash
tsc --init
```

This creates `tsconfig.json`, where TypeScript compiler options are configured.

### Compile the whole project

```bash
ppnpm run build
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

## Recommended Study Flow

1. Start with `src/fundamentals/base-variables/main.ts`.
2. Continue with arrays and special types.
3. Study interfaces in `src/functions/interfaces`.
4. Practice methods and classes in `src/oop`.
5. Review modules with `src/modules_and_projects/modules`.
6. Finish with DOM typing in `src/modules_and_projects/dom`.

## Useful Commands

```bash
pnpm install
pnpm run build
npx tsx src/fundamentals/base-variables/main.ts
```

## Notes For This Repository

This is a learning repository, so comments inside the `.ts` files are intentionally explanatory.

Some examples are designed to show TypeScript errors when lines are uncommented. Those comments are useful because they
explain what TypeScript allows and blocks.

When practicing, prefer changing one file at a time and running either `npx tsx <file>` for quick execution or
`pnpm run build` to check the complete project.
