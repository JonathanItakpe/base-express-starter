// Connect DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/commentApp')

// Launch app
const app = require('./server')

app.listen(3000, () => {
  console.log(`Listening on Port: 3000`)
})
