var express   = require('express');
var router    = express.Router();
var passport  = require('passport');
var flash     = require('connect-flash');

// route for homepage
router.get('/', function(req, res) {
  res.render('index');
});

// route for login form
router.get('/login', function(req, res) {
  res.render('login', {message: ('loginMessage') });
});

// route for processing the login form
// router.post('/login', passport.authenticate())

// route for showing the profile page
router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile', {user : req.user });
});

// route for facebook authentication and login
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email'}));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/profile',
    failtureRedirect: '/'
  }));

// route for loggin out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

router.use(flash());

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;
