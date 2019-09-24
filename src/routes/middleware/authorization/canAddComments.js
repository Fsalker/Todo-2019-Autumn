const { getJwtPayload } = require('./../../../utils');

const canAddCommentsMiddleware = (req, res, next) => {
  const { canAddComments } = getJwtPayload(req);

  if (!canAddComments) return res.status(403).end("Can't add comments");

  next();
};

module.exports = canAddCommentsMiddleware;
