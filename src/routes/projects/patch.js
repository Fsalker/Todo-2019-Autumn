const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _patch = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updateQuery = req.body;

    Object.keys(updateQuery).forEach((key) => (updateQuery[key] === undefined ? delete updateQuery[key] : ''));

    const project = await dbController.Project.updateOne({ _id: projectId }, updateQuery);

    res.json(project);
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _patch;
