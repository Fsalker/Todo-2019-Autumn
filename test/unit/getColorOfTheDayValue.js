require('chai').should();
const { getColorOfTheDayValue } = require('./../../src/utils');

describe('Color of the day\'s value', () => {
  it("Should get color of the day's value", () => {
    const color = getColorOfTheDayValue();

    color.should.be.a('string');
    color.length.should.equal(6);
    color.should.match(/^[0-9A-Fa-f]*$/);
  });
});
