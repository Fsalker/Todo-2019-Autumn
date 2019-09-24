const dbController = require('./../../databaseController');
const { logger } = require('./../../utils');

const _getAll = async (req, res) => {
  try {
    const projects = await dbController.Project.find({}, { _id: 1, title: 1 });

    res.json(projects);
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _getAll;
