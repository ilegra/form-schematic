# Angular form schematic

This repository is a basic Schematic implementation to generate Angular Forms using a JSON description

## Getting started

To test this schematic you must follow the steps:

1. Install dependencies on form generator folder

```
cd form-generator
npm install
npm run build
```

2. Install dependencies on project example to test the generator

```
cd example/angular-template
npm install
```

3. Inside the angular-template folder type:

```
npm link ../../
npm start
```

Now you can proccede creating forms component and testing the generator.

PS: Inside angular-template/jsons folder has some form schemas example to be used.

## Form Generator

This schematic is responsible for generate a form schematic using a pass by JSON, using bootstrap!

```
ng g form path/name-component ./jsons/schema.json
```

or

```
ng g f path/name-component ./jsons/schema.json
```

## Options available in CLI

## How to configure this schematic in another project

npm link ..path

angular.json
"cli": {
"analytics": false,
"defaultCollection": "forms"
}

## Install schematic in Angular project

## Backlog

-   [x] Support input elements
-   [ ] Support multiple UI frameworks - Bootstrap, Material UI, etc
-   [ ] Option to disable app-section
-   [ ] Schematic to add app-section
-   [ ] Option to disable app-custom-input
-   [ ] Schematic to add app-custom-input
-   [ ] Support others HTML elements: text-area, select, multi-select, checkbox and date picker
-   [ ] Generate specs file with tests suite
-   [ ] Support Karma/Jasmine and Jest
-   [ ] Support to form array
-   [ ] Support nested form-group inside form builder
-   [ ] Add dynamic forms using FormArray
-   [ ] Create others template with others UI framework to test the generator

## Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

## Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

## Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

## Licence

MIT
