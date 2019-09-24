const dbController = require('./../../databaseController');
const { logger, getJwtPayload } = require('./../../utils');

const userIsInProject = async (req, res, next) => {
  try {
    const { userId } = getJwtPayload(req);
    const { projectId } = req.params;

    if (!await dbController.UserToProject.find({ userId, projectId })) return res.status(404).end('User is not part of this project');

    next();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};


module.exports = userIsInProject;
