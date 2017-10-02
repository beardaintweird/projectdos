// var express          = require('express');
// var passport         = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var configAuth       = require('./auth');
// var db               = require('../models')
// var User             = db.user;
//
//
//
// // Serialize Sessions
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });
//
// // Deserialize Sessions
// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// })
//
// // Authentication Purposes
// passport.use(new FacebookStrategy({
//   clientID    : configAuth.facebookAuth.clientID,
//   clientSecret: configAuth.facebookAuth.clientSecret,
//   callbackURL : configAuth.facebookAuth.callbackURL
// },
//
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id}, function (err, user) {
//       return cb(err, user);
//     })
//   });
// );
//
// // Initialize Passport and restore authentication state, if any, from the
// // session.
// app.use(passport.initialize());
// app.use(passport.session());
