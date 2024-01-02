const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Shape = require('./shape.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

//Creates a class Input that 
class Input {
    constructor() {
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter up to 3 letters',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Which color to you want the text to be in?',
                },

                {
                    type: 'list',
                    message: 'Choose a shape',
                    name: 'shape',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'fillColor',
                    message: 'Enter a fill in color for the shape.',
                }
            ])

            // From the data received, the switch function determines which class to be used
            .then((data) => {
                const text = data.text;
                const letters = text.toUpperCase();
                switch (data.shape) {
                    case 'circle': 
                        const shapeCircle = new Circle(letters, data.textColor, data.fillColor);
                        return shapeCircle.render()
                        break;
                    case 'triangle':
                        const shapeTriangle = new Triangle(letters, data.textColor, data.fillColor);
                        return shapeTriangle.render()
                        break;
                    case 'square':
                        const shapeSquare = new Square(letters, data.textColor, data.fillColor);
                        return shapeSquare.render()
                        break;
                }
            })

            // Once class has been determined and svg code generated, a svg file is created with the data received
            .then((svg) => {
                return writeFile('logo.svg', svg);
            })
            // If there is no error, then display 'Created logo.svg' into the terminal
            .then(() => console.log('Created logo.svg'))
            // If an error occured, then display 'Oops. Something went wrong.' into the terminal
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    };
    }

module.exports = Input;