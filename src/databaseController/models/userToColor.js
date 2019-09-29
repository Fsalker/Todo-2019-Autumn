const mongoose = require('mongoose');

const UserToColorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  colorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

UserToColorSchema.index({ userId: 1, colorId: 1 }, { unique: true });

const UserToColor = mongoose.model('UserToColor', UserToColorSchema);

module.exports = UserToColor;
