const CommentController = require('./app/controllers/CommentController')

const router = (app) => {
  app.post('/', (req, res) => {
    CommentController.createNewComment(req, res)
  })
}

module.exports = router