var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/aboutswitch', function (req, res, next) {
  res.render('aboutswitch',req.body);
})
1
module.exports = router
