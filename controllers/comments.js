var Comment = require('../models/comment')

let commentsController = {
  getComments: function(req, res) {
    res.json({status: "success", message: "comments", data: []});
  }
}

module.exports = commentsController