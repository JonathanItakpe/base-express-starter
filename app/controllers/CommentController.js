const Comment = require('../models/comment')
const _ = require('lodash')
const BaseController = require('./BaseController')

class CommentController extends BaseController {
  constructor () {
    super()
  }

  createNewComment (req, res) {
    let comment = new Comment(_.pick(req.body, ['name', 'email', 'content']))

    comment.save((err) => {
      if(err){
        return res.json({status: 'error', message: 'An error occurred while creating poll.'})
      }
      
      return res.json({status: 'success', message: 'Comment Created', data: comment})
    })
  }
}

module.exports = new CommentController
