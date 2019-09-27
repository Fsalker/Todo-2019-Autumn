const deleteUserFromProject = require('./../common/deleteUserFromProject');
const { logger } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { userId, projectId } = req.params;

    await deleteUserFromProject(userId, projectId);

    res.end();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _delete;
