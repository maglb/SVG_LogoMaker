const Shape = require('../lib/shape.js');
const Circle = require('../lib/circle.js');

describe('Circle', () => {
    it('should render string creating a blue circle', () => {
        const text = '';
        const textColor = '';
        const fillColor = 'blue';
        const circle = new Circle(text, textColor, fillColor);
        const expectedHtml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
        expect(circle.render()).toEqual(expectedHtml);
    });
});