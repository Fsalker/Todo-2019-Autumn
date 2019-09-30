const { addUserToProject } = require('./../common');
const dbController = require('./../../databaseController');
const { logger, getJwtPayload } = require('./../../utils');

const _post = async (req, res) => {
  try {
    const { userId } = getJwtPayload(req);
    const { title, description } = req.body;

    const project = await dbController.Project.create({ creatorUserId: userId, title, description });
    await addUserToProject(userId, project._id);

    res.json(project);
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _post;
