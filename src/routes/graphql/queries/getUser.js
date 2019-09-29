const dbController = require('./../../../databaseController');
const { userType } = require('./../types');
const { logger, getJwtPayload } = require('./../../../utils');

const getUser = {
  type: userType,
  resolve: async (_, args, req) => {
    try {
      const { userId } = getJwtPayload(req);
      const user = await dbController.User.findOne({ _id: userId }, {
        _id: 0,
        password: 0,
      });

      if (!user) return null;

      return user;
    } catch (e) {
      logger(e);
      throw e;
    }
  },
};

module.exports = getUser;
