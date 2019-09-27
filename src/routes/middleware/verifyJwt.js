const jwt = require('jsonwebtoken');
const config = require('./../../config');

const verifyJwt = (req, res, next) => {
  const { auth } = req.headers;
  if (!auth
      || typeof auth !== 'string'
      || auth.slice(0, 7) !== 'Bearer ') {
    return res.status(401).end('Invalid JWT (must be a Bearer string).');
  }

  const token = auth.slice(7);
  try {
    jwt.verify(token, config.JWT_PRIVATE_KEY);
  } catch (e) {
    return res.status(401).end('Invalid JWT (verification failed).');
  }
  next();
};

module.exports = verifyJwt;
