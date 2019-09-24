const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _post = async (req, res) => {
  try {
    const { userId, projectId } = req.params;

    if (await dbController.UserToProject.findOne({ userId, projectId })) return res.end();

    await dbController.UserToProject.create({ userId, projectId });

    res.end();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _post;
