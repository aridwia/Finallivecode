const User = require('../models/user');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

var getall = function(req,res) {
  User.find()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}

var signup = function(req,res) {
  var hash = bcrypt.hashSync(req.body.password, salt)
  User.create({
    fullname: req.body.fullname,
    username: req.body.username,
    password: hash
  })
}

module.exports = {getall,signup};
