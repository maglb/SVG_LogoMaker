const Shape = require('./shape');

//Creates a class Circle that is a child of the class Shape
class Circle extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Circle;