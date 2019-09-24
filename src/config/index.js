require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 1337,
  MONGODB_ADDRESS: process.env.MONGODB_ADDRESS || 'host.docker.internal',
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || '1234',
  HASH_SALT: process.env.HASH_SALT || '1234',
};
