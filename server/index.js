const express = require('express');
const passport = require('passport');
const url = require('url');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Get secret and client ids
const keys = require('./config/keys');

const app = express();

// Use passport with Google instance
// Constructor requires StrategyOptions and callback with token, profile
// that should execute when authentication is finished
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (token, _, profile) => {
      console.log("data:")
      console.log(profile);
    }
  )
);


// Authenticate using google with access to this scope
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));
// Handled Authorized redirect URIs from Google and authenticate again
// then callback from GoogleStrategy will be executed
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
