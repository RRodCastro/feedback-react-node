const express = require("express");
const mongoose = require("mongoose");

require("./services/passports");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
 