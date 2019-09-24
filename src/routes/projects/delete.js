const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { projectId } = req.params;

    await dbController.Project.deleteOne({ _id: projectId });

    res.end();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _delete;
