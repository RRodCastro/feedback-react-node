const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Create user collection as mongoose model
mongoose.model("users", userSchema);
