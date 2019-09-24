const dbController = require('./../../databaseController');
const { logger, hashString, createJwt } = require('./../../utils');

const registerMiddleware = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = hashString(password);
    const user = await dbController.User.findOne({ username, password: hashedPassword });
    if (!user) return res.status(404).end('Unable to log in with the given credentials.');

    const token = createJwt({
      userId: user._id,
    });

    res.json(token);
  } catch (e) {
    res.status(500).end();
    logger(e);
  }
};

module.exports = registerMiddleware;
