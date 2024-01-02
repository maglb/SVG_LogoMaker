const Shape = require('../lib/shape.js');
const Square = require('../lib/square.js');

describe('Square', () => {
    it('should render string creating a red square', () => {
        const text = '';
        const textColor = '';
        const fillColor = 'red';
        const square = new Square(text, textColor, fillColor);
        const expectedHtml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x="50" y="0" width="200" height="200" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text> 
</svg>`;
        expect(square.render()).toEqual(expectedHtml);
    });
});