const mongoose = require("mongoose");

const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  _user: {type: Schema.Types.ObjectId, ref: 'User' },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
});

// Create survey collection as mongoose model
mongoose.model("surveys", surveySchema);
