const { getJwtPayload } = require('./../../../utils');

const canAddUserToProjectMiddleware = (req, res, next) => {
  const { canAddUserToProject } = getJwtPayload(req);

  if (!canAddUserToProject) return res.status(403).end("Can't add users to projects");

  next();
};

module.exports = canAddUserToProjectMiddleware;
