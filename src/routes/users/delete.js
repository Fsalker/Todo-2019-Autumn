const dbController = require('./../../databaseController');
const { logger, getJwtPayload } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { userId } = getJwtPayload(req);

    await dbController.User.deleteOne({ _id: userId });
    await dbController.UserToProject.deleteMany({ userId });

    res.end();
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _delete;
