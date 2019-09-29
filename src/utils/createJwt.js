const jwt = require('jsonwebtoken');
const config = require('./../config');

const createJwt = (payload) => {
  const token = jwt.sign({
    ...payload,
    _createdAt: Date.now(), // Add the timestamp the token is created at. This will help them know when they need to renew their token (:
  }, config.JWT_PRIVATE_KEY);

  return token;
};

module.exports = createJwt;
