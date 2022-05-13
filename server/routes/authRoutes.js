const passport = require("passport");

const googleAuth = passport.authenticate("google");

module.exports = (app) => {
  // Authenticate using google with access to this scope

  app.get("/auth/google", googleAuth);
  // Handled Authorized redirect URIs from Google and authenticate again
  // then callback from GoogleStrategy will be executed
  app.get("/auth/google/callback", googleAuth);

};
 