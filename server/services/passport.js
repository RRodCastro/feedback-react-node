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
    async (token, refreshToken, profile, done) => {
      const newUser = await User.findOne({ googleId: profile.id });

      if (newUser) {
        // user already in db
        // done callback passport
        return done(null, newUser);
        //done(null, {googleId: newUser.googleId});
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
