const passport = require("passport");

const googleAuth = passport.authenticate("google");

module.exports = (app) => {
  // Authenticate using google with access to this scope

  app.get("/auth/google", googleAuth);
  // Handled Authorized redirect URIs from Google and authenticate again
  // then callback from GoogleStrategy will be executed
  app.get("/auth/google/callback", googleAuth, (req, res) => {
    res.redirect("/surveys");
  });
  app.get("/api/current_user", (req, res) => res.send(req.user));
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
