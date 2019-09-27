require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const dbController = require('./../../src/databaseController');
const getJwtPayload = require('./../../src/utils/getJwtPayload');

const user = require('./resources/user');
const project = require('./resources/project');

describe('Project CRUD', () => {
  let auth;
  let userId;
  let projectId;

  before(async () => {
    await dbController.User.deleteOne({ username: user.username });
    await dbController.Project.deleteOne({ title: project.title });

    const registerResponse = await fetch(`http://localhost:${config.PORT}/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    auth = `Bearer ${await registerResponse.json()}`;
    userId = getJwtPayload({ headers: { auth } }).userId;

    await dbController.UserToProject.deleteOne({ userId });

    const projectResponse = await fetch(`http://localhost:${config.PORT}/projects`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', auth },
      body: JSON.stringify(project),
    });
    const myProject = await projectResponse.json();
    projectId = myProject._id;
  });

  after(async () => {
    await dbController.User.deleteOne({ username: user.username });
    await dbController.Project.deleteOne({ title: project.title });
    await dbController.UserToProject.deleteOne({ userId });
  });

  it('Should get users in project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToProject/${projectId}`, { headers: { auth } });
    const users = await response.json();

    response.status.should.equal(200);

    users.length.should.equal(1);
    users[0].username.should.equal(user.username);
  });

  it('Should delete user from project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToProject/${userId}/${projectId}`, {
      method: 'DELETE',
      headers: { auth },
    });

    response.status.should.equal(200);
  });

  it('Should get 0 users in project after removing the only user', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToProject/${projectId}`, { headers: { auth } });
    const users = await response.json();

    response.status.should.equal(200);
    users.length.should.equal(0);
  });

  it('Should add user to project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToProject/${userId}/${projectId}`, {
      method: 'POST',
      headers: { auth },
    });

    response.status.should.equal(200);
  });

  it('Should get 1 user in project after adding an user', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/userToProject/${projectId}`, { headers: { auth } });
    const users = await response.json();

    response.status.should.equal(200);
    users.length.should.equal(1);
    users[0].username.should.equal(user.username);
  });
});
