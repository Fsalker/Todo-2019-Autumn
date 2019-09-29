const should = require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const { createJwt } = require('./../../src/utils');

describe('Colors API', () => {
  const auth = `Bearer ${createJwt()}`;

  it('Should get color of the day', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/colors`, {
      headers: { auth },
    });
    response.status.should.equal(200);

    const color = await response.json();

    should.exist(color);
    color.should.have.property('id').that.is.a('string');
    color.should.have.property('value').that.is.a('string');
    color.should.have.property('likes').that.is.a('number');
  });
});
