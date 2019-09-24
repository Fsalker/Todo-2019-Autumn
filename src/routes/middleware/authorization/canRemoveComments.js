const { getJwtPayload } = require('./../../../utils');

const canRemoveCommentsMiddleware = (req, res, next) => {
  const { canRemoveComments } = getJwtPayload(req);

  if (!canRemoveComments) return res.status(403).end("Can't remove comments");

  next();
};

module.exports = canRemoveCommentsMiddleware;
