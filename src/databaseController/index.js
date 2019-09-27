const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(`mongodb://${config.MONGODB_ADDRESS}/main`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const models = require('./models');

module.exports = models;
