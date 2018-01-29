var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var index = require('./routes/index');
var app = express();
var Bing = require('node-bing-api')({accKey:'c12dc7a598e24fa19d19257794b066db'});
var mongoose = require('mongoose');
var url = process.env.MONGOLAB_URI;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);


mongoose.connect('mongodb://heroku_qg2qch4m:70u26trgp2t7e64c8gln8td4rb@ds263707.mlab.com:63707/heroku_qg2qch4m' || 'mongodb://localhost/Schema');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
