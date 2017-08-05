const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

var commentSchema = new Schema({
  name: String,
  email: String,
  content: String,
})

module.exports = Mongoose.model('Comment', commentSchema)