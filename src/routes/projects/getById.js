const dbController = require('../../databaseController');
const { logger } = require('../../utils');

const _getById = async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = await dbController.Project.findOne({ _id: projectId });

    res.json(project);
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _getById;
