const dbController = require('./../../databaseController');
const { logger, getJwtPayload } = require('./../../utils');

const _delete = async (req, res) => {
  try {
    const { userId } = getJwtPayload(req);

    await dbController.User.deleteOne({ _id: userId });

    res.end();
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = _delete;