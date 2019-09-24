const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(`mongodb://${config.MONGODB_ADDRESS}/main`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const models = require('./models');

module.exports = models;
