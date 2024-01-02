const Shape = require('./shape.js');

//Creates a Triangle class that is a child of the class Shape
class Triangle extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150 0, 280 200, 20 200" fill="${this.fillColor}" />
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Triangle;