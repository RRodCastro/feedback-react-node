const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Get secret and client ids
const keys = require("../config/keys");

// Use passport with Google instance strategy
// Constructor requires StrategyOptions and callback with token, profile
// that should execute when authentication is finished
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"]
    },
    (token, _, profile) => {
      console.log("data:");
      console.log(profile);
    }
  )
);