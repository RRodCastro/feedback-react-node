const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// Create user collection as mongoose model
mongoose.model("users", userSchema);
