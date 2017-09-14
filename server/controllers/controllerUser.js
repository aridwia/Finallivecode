const User = require('../models/user');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken')
require('dotenv').config()

var getall = function(req,res) {
  User.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
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

var authentikasiUser = function(req,res) {
  User.findOne({username:req.body.username}, function(err, user){
    if(user){
      bcrypt.compareSync(req.body.password,user.password)
      .then(result =>
        if(result){
          var token = jwt.sign({
            username: user.name,
            id: user._id,
          },process.env.DB_USER)
          res.send({ini token: token},{msg: 'login sukses'})
        } else {
          res.send('salah password')
        }
      )
    }
  })
}

module.exports = {getall,signup};
