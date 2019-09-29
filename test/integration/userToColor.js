const should = require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const { createJwt } = require('./../../src/utils');
const dbController = require('./../../src/databaseController');

describe('User to color API', () => {
  const userId = '5d90d5d7559fd0854306ccd6';
  const auth = `Bearer ${createJwt({ userId })}`;
  let color;

  before(async () => {
    await dbController.UserToColor.deleteOne({ userId });

    const colorResponse = await fetch(`http://localhost:${config.PORT}/colors`, {
      headers: { auth },
    });
    color = await colorResponse.json();
  });

  after(async () => {
    await dbController.UserToColor.deleteOne({ userId });
  });

  it('Should like color of the day and update its amount of likes', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToColor/${color.id}`, {
      method: 'POST',
      headers: { auth },
    });
    response.status.should.equal(200);

    const colorResponse = await fetch(`http://localhost:${config.PORT}/colors`, {
      headers: { auth },
    });
    colorResponse.status.should.equal(200);

    const newColor = await colorResponse.json();
    newColor.likes.should.equal(color.likes + 1);
  });
});
