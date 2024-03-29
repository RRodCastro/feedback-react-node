const passport = require("passport");
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks!')
  });
  
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user }).exec();
    res.send(surveys);
  })
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({ 
        _user: req.user,
        title,
        subject,
        body,
        recipients: recipients.split(",").map(email => ({email : email.trim() })),
        dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      
    await mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();

    res.send(user);
    
  } catch (err) {
    res.status(422).send(err);
  }
  });
};
