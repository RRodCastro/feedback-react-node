const passport = require("passport");
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = await new Survey({ 
        _user: req.user,
        title,
        subject,
        body,
        recipients: recipients.split(",").map(email => ({email : email.trim() })),
        dateSent: Date.now()
    }).save();
    
    res.send("Created!");
  });
};
