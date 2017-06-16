var express = require('express')
  , router = express.Router()

router.use('/comments', require('./comments'))

router.get('/', function(req, res) {
  res.json({status: "success", message: "storeOga API"});
})

module.exports = router