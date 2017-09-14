var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fullname: String,
  username: String,
  password: String
})

var User = mongoose.model('User', userSchema);

module.exports = User;
