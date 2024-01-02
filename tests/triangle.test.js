const Shape = require('../lib/shape.js');
const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    it('should render string creating a green triangle', () => {
        const text = '';
        const textColor = '';
        const fillColor = 'green';
        const triangle = new Triangle(text, textColor, fillColor);
        const expectedHtml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
        expect(triangle.render()).toEqual(expectedHtml);
    });
});