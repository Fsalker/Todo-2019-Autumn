const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { projectId } = req.params;

    await dbController.Project.deleteOne({ _id: projectId });
    await dbController.UserToProject.deleteMany({ projectId });

    res.end();
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _delete;
