const Shape = require('../lib/shape.js');
const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    it('should render a string creating a green triangle', () => {
        const text = '';
        const textColor = '';
        const fillColor = 'green';
        const triangle = new Triangle(text, textColor, fillColor);
        const expectedHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150 0, 280 200, 20 200" fill="green" />
<text x="150" y="150" font-size="60" text-anchor="middle" fill=""></text>
</svg>`;
        expect(triangle.render()).toEqual(expectedHtml);
    });
});