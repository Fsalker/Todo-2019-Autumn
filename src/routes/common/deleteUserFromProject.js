const dbController = require('./../../databaseController');

const deleteUserFromProject = async (userId, projectId) => {
  await dbController.UserToProject.deleteOne({ userId, projectId });
};

module.exports = deleteUserFromProject;
