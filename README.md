# Course TypeScript

This project is a basic setup to start learning TypeScript.\
It includes the initial configuration and simple examples to understand
how TypeScript works and how it compiles to JavaScript.

## 📦 Project Setup

To initialize a TypeScript project, run:

tsc --init

This command creates a `tsconfig.json` file, which contains the
TypeScript compiler configuration.

## ▶️ How to Run a TypeScript File

1.  Make sure you are inside the correct folder (in this case, the `src`
    directory).

2.  Compile the TypeScript file:

tsc `<file_name>`{=html}.ts

This will generate a JavaScript file with the same name.

3.  Run the generated JavaScript file using Node.js:

node `<file_name>`{=html}.js

## 📁 Project Structure

-   `src/` → Contains the TypeScript source files.
-   `node_modules/` → Contains installed dependencies (including
    TypeScript).
-   `tsconfig.json` → TypeScript configuration file.
-   `package.json` → Project configuration and dependencies.
