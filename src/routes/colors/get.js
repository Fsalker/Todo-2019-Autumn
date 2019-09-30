const dbController = require('../../databaseController');
const { logger, getTodayTimestamp, getColorOfTheDayValue } = require('../../utils');

const _get = async (req, res) => {
  try {
    const dayTimestamp = getTodayTimestamp();
    let color = await dbController.Color.findOne({ dayTimestamp });

    if (!color) { // Create color of the day when the first user attempts to get it
      color = await dbController.Color.create({
        value: getColorOfTheDayValue(),
        dayTimestamp: getTodayTimestamp(),
      });
    }
    const likes = await dbController.UserToColor.countDocuments({ colorId: color._id });

    const colorInfo = {
      id: color._id,
      value: color.value,
      likes,
    };

    res.json(colorInfo);
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = _get;
