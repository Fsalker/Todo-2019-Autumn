const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { projectId } = req.params;

    const userIds = (await dbController.UserToProject.find({ projectId })).map((userToProject) => userToProject.userId);
    const users = await dbController.User.find({ _id: { $in: userIds } }, { _id: 1, username: 1 });

    res.json(users);
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _delete;
