require('chai').should();
const createJwt = require('./../../src/utils/createJwt');
const getJwtPayload = require('./../../src/utils/getJwtPayload');

describe('Getting JWT payload from requests', () => {
  it('Should get payload from jwt', () => {
    const data = {
      noodlesWithCheese: true,
    };


    const token = createJwt(data);
    const request = {
      headers: {
        auth: `Bearer ${token}`,
      },
    };
    const payload = getJwtPayload(request);

    payload.should.be.a('object');
    payload.should.not.be.a('string');
    payload.should.haveOwnProperty('noodlesWithCheese');
    payload.noodlesWithCheese.should.equal(true);
  });
});
