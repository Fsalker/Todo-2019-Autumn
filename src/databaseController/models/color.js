const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  value: {
    type: String, /* ex: FD18A9 */
    required: true,
  },
  dayTimestamp: {
    type: String,
    required: true,
  },
});

ColorSchema.path('value').validate((value) => !(/[^0-9a-fA-F]/.test(value)) && value.length === 6);

const Color = mongoose.model('Color', ColorSchema);

module.exports = Color;
