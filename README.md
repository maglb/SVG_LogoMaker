# SVG_LogoMaker

## Description

For this project, our task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

Below are the assigmemnt's requirements:

### User Story

* AS a freelance web developer
* I WANT to generate a simple logo for my projects
* SO THAT I don't have to pay a graphic designer

### Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for text
* THEN I can enter up to three characters
* WHEN I am prompted for the text color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I am prompted for a shape
* THEN I am presented with a list of shapes to choose from: circle, triangle, and square
* WHEN I am prompted for the shape's color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I have entered input for all the prompts
* THEN an SVG file is created named `logo.svg`
* AND the output text "Generated logo.svg" is printed in the command line
* WHEN I open the `logo.svg` file in a browser
* THEN I am shown a 300x200 pixel image that matches the criteria I entered

## How to use it

Type 'node index' into the terminal and answer to the prompts. Once all questions have been answer, a svg file named 'logo.svg' will be created in the main folder.
In order to test the shapes class, type 'npm test' into the terminal.

## Links

In order to complete this assignment, I have referred to a few online resources and previous assignments:

#### About SVG:
* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

#### About classes
* https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420
* https://medium.com/sessionstack-blog/how-javascript-works-3-types-of-polymorphism-f10ff4992be1

#### On writting Jest test
* https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
* https://jestjs.io/docs/expect


## Screenshots

![Logo Output Example](./image/Screen%20Shot%202024-01-02%20at%2010.11.04%20AM.png)