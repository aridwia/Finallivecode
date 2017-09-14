const Article = require('../models/article')

var getall = function(req,res){
  Article.find({})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getone = function(req,res){
  Article.findOne({_id:req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getauthor = function(req,res){
  Article.findOne({author: req.body.author})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var update = function(req,res){
  Article.update({_id:req.params.id},{
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var remove = function(req,res){
  Article.deleteOne({_id:req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var create = function(req,res){
  var newarticle = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  newarticle.save((err, createdarticle) => {
    if(err) {
      res.send(err)
    } else {
      res.send(createdarticle)
    }
  })
}

module.exports = {getall,create,getone,update,remove,getauthor};
