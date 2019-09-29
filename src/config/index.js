require('dotenv').config();

const MONGODB_PORT = process.env.MONGODB_PORT || 27017;

module.exports = {
  PORT: process.env.PORT || 1337,
  MONGODB_PORT,
  MONGODB_ADDRESS: `${process.env.MONGODB_HOST || 'host.docker.internal'}:${MONGODB_PORT}`,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || '1234',
  HASH_SALT: process.env.HASH_SALT || '1234',
};
