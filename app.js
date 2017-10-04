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
var flash            = require('connect-flash');

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

// Initialize Passport and restore authentication state
app.use(passport.initialize());
app.use(passport.session());

// app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


//********************// PASSPORT.JS //********************//

// Serialize Sessions
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize Sessions
passport.deserializeUser(function(obj, done) {
  done(null, obj);
})

// Authentication Purposes
passport.use(new FacebookStrategy({
  clientID    : '178205629406652',
  clientSecret: '2aef7dc8368ca804cc0b126fc15894f6',
  callbackURL : 'http://localhost:3000/auth/facebook/callback'
},

// function(accessToken, refreshToken, profile, done) {
//   console.log('accessToken', accessToken, 'refereshToken', refreshToken, 'profile', profile);
//   process.nextTick(function() {
//
//         User.findOrCreate({
//           where: {
//             facebookId: profile.id,
//             displayName: profile.displayName
//           }, function(err, user) {
//             if (err)  {
//               console.log('error');
//               return done(err);
//               }
//             if (user) {
//               console.log('user');
//
//               return done (null, user);
//               }
//           }
//
//         });
//       });
//     }
(req, token, refreshToken, profile, done) => {
    console.log('token', token, 'refereshToken', refreshToken, 'profile', profile);

    //Do your staff here, whatever you want...

    //But this is very very important
    return done(null, profile);

  }));



//********************// PASSPORT.JS //********************//

//********************// PASSPORT.JS //********************//
app.get('/', (req,res) => {
  res.render('index');
})
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/questions', require('./routes/questions'));

// route for showing the profile page
app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile', {user : req.user });
});

// route for facebook authentication and login
app.get('/auth/facebook',
  passport.authenticate('facebook', { session: false }));

// handle the callback after facebook has authenticated the user
// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect : '/profile',
//     failureRedirect : '/'
// }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res) => {
    res.render('profile', {user: req.user});
    console.log('req.user', req.user);
});

// route for loggin out
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.use(flash());

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

//********************// PASSPORT.JS //********************//

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
