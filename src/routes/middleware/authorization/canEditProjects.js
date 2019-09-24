const { getJwtPayload } = require('./../../../utils');

const canEditProjectsMiddleware = (req, res, next) => {
  const { canEditProjects } = getJwtPayload(req);

  if (!canEditProjects) return res.status(403).end("Can't edit projects");

  next();
};

module.exports = canEditProjectsMiddleware;
