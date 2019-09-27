const dbController = require('./../../databaseController');

const addUserToProject = async (userId, projectId) => {
  if (await dbController.UserToProject.findOne({ userId, projectId })) return; // Do not add the same user twice in a project

  await dbController.UserToProject.create({ userId, projectId });
};

module.exports = addUserToProject;
