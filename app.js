var express          = require('express');
var path             = require('path');
var favicon          = require('serve-favicon');
var logger           = require('morgan');
var cookieParser     = require('cookie-parser');
var bodyParser       = require('body-parser');
var app              = express();
var passport         = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth       = require('./config/auth');
var db               = require('./models')
var User             = db.user;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


//********************// PASSPORT.JS //********************//

// Serialize Sessions
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

// Deserialize Sessions
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})

// Authentication Purposes
passport.use(new FacebookStrategy({
  clientID    : configAuth.facebookAuth.clientID,
  clientSecret: configAuth.facebookAuth.clientSecret,
  callbackURL : configAuth.facebookAuth.callbackURL
},

  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id}, function (err, user) {
      return cb(err, user);
    })
  }
));

// Initialize Passport and restore authentication state
app.use(passport.initialize());
app.use(passport.session());

//********************// PASSPORT.JS //********************//


app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/questions', require('./routes/questions'));

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
