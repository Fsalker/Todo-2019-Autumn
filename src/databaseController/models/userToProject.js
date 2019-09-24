const mongoose = require('mongoose');

const UserToProjectSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  projectId: mongoose.Schema.Types.ObjectId,
});

UserToProjectSchema.index({ userId: 1, projectId: 1 }, { unique: true });

const UserToProject = mongoose.model('UserToProject', UserToProjectSchema);

module.exports = UserToProject;
