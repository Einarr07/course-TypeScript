# Angular Template

This project was created as a simple example to practice the commands needed to
start an Angular project with Angular CLI.

It was generated using [Angular CLI](https://github.com/angular/angular-cli)
version 21.2.12.

## Install Angular CLI

Install the Angular CLI with pnpm:

```bash
pnpm install @angular/cli
```

After the installation is complete, verify the installed version:

```bash
ng version
```

## Create the project

Run the Angular project generator:

```bash
ng new <projectName>
```

For this example, the project name is:

```bash
ng new templateAngular
```

## Run the project

Start the local development server:

```bash
ng serve
```

Once the server is running, open the browser at:

```text
http://localhost:4200/
```

The application reloads automatically when you modify the source files.

## Generate code

Angular CLI can generate files such as components, directives, pipes, and
services.

To generate a new component, run:

```bash
ng generate component component-name
```

To see all available generators, run:

```bash
ng generate --help
```

## Build the project

Create a production build:

```bash
ng build
```

The compiled files are created in the `dist/` directory.

## Run tests

Run unit tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

Angular CLI does not include an end-to-end testing framework by default, so you
can choose the one that best fits your project.

## Additional resources

For more information, visit the
[Angular CLI documentation](https://angular.dev/tools/cli).
