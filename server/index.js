const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passports");

const keys = require("./config/keys");

mongoose.connect(keys.monogURI);
const app = express();

require("./routes/authRoutes")(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
