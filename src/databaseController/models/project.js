const mongoose = require('mongoose');

const Project = mongoose.model('Project', {
  creatorUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: String,
  description: String,
});

module.exports = Project;
