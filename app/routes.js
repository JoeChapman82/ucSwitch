var express = require('express');
var app = express.Router();

// Route index page
app.get('/', function (req, res) {
  res.render('index');
});

// add your routes here

app.post('/aboutswitch', function (req, res, next) {
  res.render('aboutswitch',req.body);
});

// add 2017 routes here

app.post('2017/bankaccount', function (req, res, next) {
  res.render('bankaccount',req.body);
});
module.exports = app;

require('./views/ucs1/routes/routes')(app);
require('./views/ucs2/routes/routes')(app);
