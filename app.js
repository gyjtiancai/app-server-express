var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// delimit api router
var homeRouter = require('./routes/home');
var indexRouter = require('./routes/index');

// express instance
var app = express();

// app global logic
app.all('*', function (req, res, next) {
  console.log('global logic is login ...')
  next() // pass control to the next handler
})

// app.locals
app.locals.title = 'my app server'
app.locals.author = 'geyujie'
// console.dir(app.locals)

// add view dir
app.set('views', path.join(__dirname, 'views/ejs'));

// add view engine
app.set('view engine', 'ejs'); 
// app.set('view engine', 'pug');

// add console log
app.use(logger('dev'));

/*  express.json([options]) 
    default options: 
    { 
      inflate: true,
      limit: "100kb", ---control the maximum request body size
      reviver: null,  ---reviver option is passed directly to JSON.parse as the second argument
      strict: true,   ---if open strict, only accepting arrays and objects;
      type: "application/json",  ---this is used to determine what media type the middleware will parse
      verify: undefined
    }
*/
app.use(express.json());

/*  express.urlencoded([options]) 
    default options: 
    { 
      extended: true, --- true:require("qs"), false:require("querystring")
      inflate: true,
      limit: "100kb"  ---control the maximum request body size
      parameterLimit: 1000,  ---control the maximum number of parameters that are allowed in the URL-encoded data. 
      type: "application/x-www-form-urlencoded",  ---this is used to determine what media type the middleware will parse
      verify: undefined
    }
*/
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Hosting static files
app.use(express.static(path.join(__dirname, 'public')));

// add api router
app.use('/', indexRouter);
app.use('/Home', homeRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
