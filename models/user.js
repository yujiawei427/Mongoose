const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  profession: String
});

const userModel = mongoose.model('lsy', userSchema); //这里是collection的名字

module.exports = userModel;