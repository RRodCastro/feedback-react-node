const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  User.findById(id).then((user) => done(null, user))
);

// Use passport with Google instance strategy
// Constructor requires StrategyOptions and callback with token, profile
// that should execute when authentication is finished
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    (token, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((newUser) => {
        if (newUser) {
          // user already in db
          // done callback passport
          done(null, newUser);
          //done(null, {googleId: newUser.googleId});
        } else {
          new User({ googleId: profile.id }).save().then(
            passport.serializeUser((user, done) => {
              done(null, user);
            })
          );
        }
      });
    }
  )
);
