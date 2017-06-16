var express = require('express')
  , router = express.Router()
  , commentController = require('../controllers/comments');

router.get('/', commentController.getComments);

module.exports = router