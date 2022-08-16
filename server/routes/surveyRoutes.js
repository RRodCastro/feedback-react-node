const passport = require("passport");
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({ 
        _user: req.user,
        title,
        subject,
        body,
        recipients: recipients.split(",").map(email => ({email : email.trim() })),
        dateSent: Date.now()
    });
    // Mailer

    const mailer = new Mailer(survey, surveyTemplate(survey));

    res.send("Created!");
  });
};
