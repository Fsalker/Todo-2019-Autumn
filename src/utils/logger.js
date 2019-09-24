const fs = require('fs');

const LOG_FILE_NAME = 'log.txt';

const logger = (msg) => {
  const timePrefix = Date.now();
  const finalMessage = `[${timePrefix}] ${msg}\n`;
  fs.appendFileSync(`./logs/${LOG_FILE_NAME}`, finalMessage);
  console.log(msg);
};

module.exports = logger;
