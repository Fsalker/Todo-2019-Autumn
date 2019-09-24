const dbController = require('./../../databaseController');
const { logger, getJwtPayload } = require('./../../utils');

const _post = async (req, res) => {
  try {
    const { userId } = getJwtPayload(req);
    const { title, description } = req.body;

    const project = await dbController.Project.create({ creatorUserId: userId, title, description });

    res.json(project);
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _post;
