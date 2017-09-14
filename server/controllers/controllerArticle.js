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

var create = function(req,res){
  var newarticle = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
}

module.exports = {getall,create};
