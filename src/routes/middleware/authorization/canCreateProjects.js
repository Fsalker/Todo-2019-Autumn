const { getJwtPayload } = require('./../../../utils');

const canCreateProjectsMiddleware = (req, res, next) => {
  const { canCreateProjects } = getJwtPayload(req);

  if (!canCreateProjects) return res.status(403).end("Can't create projects");

  next();
};

module.exports = canCreateProjectsMiddleware;
