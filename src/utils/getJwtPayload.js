const jwt = require('jsonwebtoken');

const getJwtPayload = (req) => jwt.decode(req.headers.auth.slice(7));

module.exports = getJwtPayload;
