const should = require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const dbController = require('./../../src/databaseController');

const user = require('./resources/user');
const userExtended = require('./resources/userExtended');

describe('Project CRUD', () => {
  let auth;

  before(async () => {
    await dbController.User.deleteOne({ username: user.username });

    const registerResponse = await fetch(`http://localhost:${config.PORT}/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    auth = `Bearer ${await registerResponse.json()}`;
  });

  after(async () => {
    await dbController.User.deleteOne({ username: user.username });
  });

  it('Should get user\'s detailed data', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/graphql`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', auth },
      body: JSON.stringify({
        query: ` query {
            getUser {
                username
                age
                bio
                hobbies
                height
                mass
            }
        }`,
      }),
    });

    should.not.exist(response.errors);
    response.status.should.equal(200);

    const userDetailed = (await response.json()).data.getUser;
    userDetailed.username.should.equal(user.username);
    should.not.exist(userDetailed.age);
    should.not.exist(userDetailed.bio);
    should.not.exist(userDetailed.hobbies);
    should.not.exist(userDetailed.height);
    should.not.exist(userDetailed.mass);
  });

  it('Should update user\'s detailed data', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/graphql`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', auth },
      body: JSON.stringify({
        query: ` mutation ($user: UserInput!) {
              updateUser(newUser: $user) {
                  username
                  age
                  bio
                  hobbies
                  height
                  mass
              }
          }`,
        variables: {
          user: userExtended,
        },
      }),
    });

    should.not.exist(response.errors);
    response.status.should.equal(200);

    const userDetailed = (await response.json()).data.updateUser;
    userDetailed.age.should.equal(userExtended.age);
    userDetailed.bio.should.equal(userExtended.bio);
    userDetailed.hobbies.should.equal(userExtended.hobbies);
    userDetailed.height.should.equal(userExtended.height);
    userDetailed.mass.should.equal(userExtended.mass);
  });
});
