# Zoo Tracker
### Arianna Chau, July 7th, 2017
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=plastic)](https://github.com/ariannachau/zoo-tracker)

This web app was made with Typescript and Angular. Its purpose is to show off my week two knowledge from the Javascript track at Epicodus. This zoo tracker is a simple app designed to give the user the ability to create animals in a zoo with certain properties(species, name, diet, age, etc.). It gives the user the ability to sort the animals by certain parameters, add new animals, and edit existing ones.

## Landing Page:
![](./resources/images/screenshot.png)

## Planning

### 1. Configuration/dependencies
  The app will primarily use the Angular 2 framework and Typescript. It was made with the basics learned from week 2 at Epicodus. Stretch goals include:
    * Polish future styling I didn't have time to do before the deadline.
    * Perfect text to speech, get it up and running without having to comment it out and back in.

### 2. Specs
  * Spec 1: User can create animals and display them on the page.
  * Spec 2: User can edit created animals.
  * Spec 3: User can pick how the want to view animals by age.

### 3. Integration
  * Root component/Index page.
  * New animal component.
  * Edit animal component.

### 5. Polish
  * Refactor code.
  * Delete unused code.
  * Flush out README.

## Known Bugs
  For whatever reason, the responsiveVoice is unable to be read by Gulp. I have it commented out, once cloning the project and serving it, you can comment it back and and once the server refreshes, it should work just fine. Included for kiddos who want to use the site but haven't gotten the full hang of reading.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Typescript](https://www.typescriptlang.org/)

## Installation

As of writing this README, these instructions work on MacOS.

* Run `$ git clone <this-repository-url>`
* Then `$ cd zoo-tracker`
* Once in the zoo-tracker folder, run `$ npm install` and `$ bower install`

## Running / Development

Now that everything you need should be installed, we can run it with gulp.

* Run `$ gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Built With

* Angular
* Typescript
* HTML
* CSS/SASS
* Jquery https://jquery.com/
* Node
* Bower

## Authors

Arianna Chau

## License

MIT License

Copyright (c) Arianna Chau, 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
