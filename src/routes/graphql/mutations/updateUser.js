const dbController = require('./../../../databaseController');
const { userType, userInputType } = require('./../types');
const { logger, getJwtPayload } = require('./../../../utils');

const updateUser = {
  type: userType,
  args: {
    newUser: {
      type: userInputType,
    },
  },
  resolve: async (_, { newUser }, req) => {
    try {
      const { userId } = getJwtPayload(req);
      const userResult = await dbController.User.findOneAndUpdate({ _id: userId }, newUser, { new: true });

      return userResult;
    } catch (e) {
      logger(e);
      throw e;
    }
  },
};

module.exports = updateUser;
