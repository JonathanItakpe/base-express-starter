const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');

const app = express()
const router = require('./router')
// Cookies
app.use(cookieParser('poll-secret'))
// Session
app.use(session({ cookie: { maxAge: 60000 }}))
// Flash
app.use(flash())
// Static ISH
app.use(express.static('public'))
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())
// Set up views
app.set('views', './views')
app.set('view engine', 'pug')
// Set up the router
router(app)

module.exports = app