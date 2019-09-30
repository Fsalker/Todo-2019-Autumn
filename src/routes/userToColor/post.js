const dbController = require('../../databaseController');
const { logger, getJwtPayload } = require('../../utils');

const _get = async (req, res) => {
  try {
    const { userId } = getJwtPayload(req);
    const { colorId } = req.params;

    if (await dbController.UserToColor.findOne({ userId, colorId })) return res.status(409).end('You have already liked this color');

    await dbController.UserToColor.create({ userId, colorId });

    res.end();
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _get;
