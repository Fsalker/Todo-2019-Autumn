const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  bio: String,
  hobbies: String,
  height: Number, // Height in meters
  mass: Number, // Mass in kg
});

module.exports = User;
