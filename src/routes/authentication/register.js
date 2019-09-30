const dbController = require('./../../databaseController');
const { logger, hashString, createJwt } = require('./../../utils');

const registerMiddleware = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userWithIdenticalUsername = await dbController.User.findOne({ username });
    if (userWithIdenticalUsername) return res.status(409).end('Username is already taken');

    const hashedPassword = hashString(password);
    const user = await dbController.User.create({ username, password: hashedPassword });
    const token = createJwt({
      userId: user._id,
      canAddComments: username.length >= 10,
      canAddUserToProject: true,
      canCreateProjects: true,
      canEditProjects: true,
      canRemoveComments: true,
    });

    res.json(token);
  } catch (e) {
    res.status(500).end('An error has occurred when processing your request. Please try again.');
    logger(e);
  }
};

module.exports = registerMiddleware;
