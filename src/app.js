const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const routes = require('./routes');
const { logger } = require('./utils');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.listen(config.PORT);
logger(`Server is up and running on PORT ${config.PORT}`);

module.exports = app;
