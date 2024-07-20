const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  image: String,
  author: String,
  date: String,
  title: String,
  snippet: String,
  description: String,
  readTime: Number,
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Blog', BlogSchema);
