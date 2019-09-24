const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { userId, projectId } = req.params;

    await dbController.UserToProject.deleteMany({ userId, projectId });

    res.end();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _delete;
