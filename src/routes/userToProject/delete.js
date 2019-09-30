const { deleteUserFromProject } = require('./../common');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { userId, projectId } = req.params;

    await deleteUserFromProject(userId, projectId);

    res.end();
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _delete;
