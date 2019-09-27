require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const dbController = require('./../../src/databaseController');

const user = require('./resources/user');

describe('Register, Login and delete User', () => {
  before(async () => {
    await dbController.User.deleteOne({ username: user.username });
  });

  after(async () => {
    await dbController.User.deleteOne({ username: user.username });
  });

  let auth;

  it('Should register a new account and receive a jwt', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    const jwt = await response.json();

    response.status.should.equal(200);
    jwt.should.be.a('string');
    jwt.split('.').should.have.length(3);
  });

  it('Should not register the same user twice', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });

    response.status.should.equal(409);
  });

  it('Should log into the registered account and receive a jwt', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    const jwt = await response.json();

    response.status.should.equal(200);
    jwt.should.be.a('string');
    jwt.split('.').should.have.length(3);

    auth = `Bearer ${jwt}`;
  });

  it('Should delete user', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/users`, {
      method: 'DELETE',
      headers: { auth },
    });

    response.status.should.equal(200);
    response.status.should.not.equal(401);
  });

  it('Should not login succesfully anymore', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });

    response.status.should.equal(404);
  });
});
