'use strict';

var mongo = require('mongoskin'),
  passport = require('passport'),
  OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

module.exports = function () {
  passport.use(new OAuth2Strategy({
      authorizationURL: 'https://api.flowdock.com/oauth/authorize',
      tokenURL: 'https://api.flowdock.com/oauth/token',
      clientID: process.env.FLOWDOCK_APPLICATION_ID,
      clientSecret: process.env.FLOWDOCK_SECRET,
      callbackURL: process.env.APPLICATION_BASE_URL + '/oauth/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate(...)
    })
  );
};
