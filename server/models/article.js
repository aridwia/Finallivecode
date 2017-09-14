var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Article = mongoose.model('Article',articleSchema);

module.exports = Article;
