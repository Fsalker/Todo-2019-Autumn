require('chai').should();
const createJwt = require('./../../src/utils/createJwt');

describe('Creating JWTs', () => {
  it('Should create a valid jwt', () => {
    const data = {
      color: 'green',
    };

    const token = createJwt(data);

    token.should.be.a('string');
    token.split('.').should.have.length(3); // A valid JWT has three parts and is separated by two periods
    token.split('.').should.not.have.length(2);
  });
});
