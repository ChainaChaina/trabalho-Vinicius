var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-angular');

var message = require('./routes/message');
var user = require('./routes/user');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  '/bootstrap',
  express.static(__dirname + '/node_modules/bootstrap/dist')
);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use(
  bodyParser.json(),
  cookieParser(),
  logger('dev'),
  express.static(path.join(__dirname, 'public')),
  message,
  user
);

module.exports = app;
