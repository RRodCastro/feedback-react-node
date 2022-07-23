const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
require("./models/User");
require("./services/passport");

const keys = require("./config/keys");

mongoose.connect(keys.monogURI);
const app = express();
 
app.use(bodyParser.json());

// Cookie session midleware, extract cookie in route handlers
// Store cookie hashed with cookie key
app.use(
  cookieSession({
    keys: [keys.cookieKey],
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })
);
// Passport get the decrpyted user id (deserialze user)
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
