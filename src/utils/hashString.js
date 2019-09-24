const crypto = require('crypto');
const config = require('./../config');

const hashString = (msg) => crypto.createHash('sha512').update(`${msg}${config.HASH_SALT}`).digest('hex');

module.exports = hashString;
