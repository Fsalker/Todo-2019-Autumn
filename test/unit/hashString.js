require('chai').should();
const hashString = require('./../../src/utils/hashString');

describe('String hashing', () => {
  it('Should modify string after hashing', () => {
    const str = 'John';
    const strHash = hashString(str);

    str.should.not.equal(strHash);
    strHash.should.be.a('string');
  });

  it('Should produce the same output for a given string', () => {
    const str = 'John';
    const strHash1 = hashString(str);
    const strHash2 = hashString(str);

    strHash1.should.be.a('string');
    strHash2.should.be.a('string');
    strHash1.should.equal(strHash2);
  });
});
