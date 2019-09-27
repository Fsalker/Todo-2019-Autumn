const should = require('chai').should();
const fetch = require('node-fetch');
const config = require('./../../src/config');
const dbController = require('./../../src/databaseController');
const getJwtPayload = require('./../../src/utils/getJwtPayload');

const user = require('./resources/user');
const project = require('./resources/project');

describe('Project CRUD', () => {
  const PATCHED_PROJECT_TITLE = 'asdf1234';
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
  });

  after(async () => {
    await dbController.User.deleteOne({ username: user.username });
    await dbController.Project.deleteOne({ title: project.title });
  });

  it('Should create a project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', auth },
      body: JSON.stringify(project),
    });
    const createdProject = await response.json();

    response.status.should.equal(200);

    createdProject._id.should.be.a('string');
    createdProject.title.should.equal(project.title);
    createdProject.description.should.equal(project.description);
    createdProject.creatorUserId.should.equal(userId);

    projectId = createdProject._id;
  });

  it('Should get list of projects', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects`, { headers: { auth } });
    const projects = await response.json();

    response.status.should.equal(200);

    projects.should.have.length.above(0);
    const myProject = projects.find((proj) => proj._id === projectId);
    should.exist(myProject);
    myProject.title.should.equal(project.title);
  });

  it("Should get a project's detailed information", async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects/${projectId}`, { headers: { auth } });
    const myProject = await response.json();

    response.status.should.equal(200);

    myProject._id.should.equal(projectId);
    myProject.creatorUserId.should.equal(userId);
    myProject.title.should.equal(project.title);
    myProject.description.should.equal(project.description);
  });

  it('Should PATCH project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json', auth },
      body: JSON.stringify({ title: PATCHED_PROJECT_TITLE }),
    });

    response.status.should.equal(200);
  });

  it('Should get the patched project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects/${projectId}`, { headers: { auth } });
    const myProject = await response.json();

    response.status.should.equal(200);

    myProject.title.should.equal(PATCHED_PROJECT_TITLE);
  });

  it('Should delete project', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects/${projectId}`, {
      method: 'DELETE',
      headers: { auth },
    });

    response.status.should.equal(200);
  });

  it('Should not get the project\'s detailed information anymore', async () => {
    const response = await fetch(`http://localhost:${config.PORT}/projects/${projectId}`, { headers: { auth } });
    const myProject = await response.json();

    response.status.should.equal(200);
    should.not.exist(myProject);
  });
});
