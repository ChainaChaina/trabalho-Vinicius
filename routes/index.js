var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const message = require('./message');
const user = require('./user');

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    cookieParser(),
    logger('dev'),
    express.static(path.join(__dirname, 'public')),
    message,
    user
  );
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
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
};
