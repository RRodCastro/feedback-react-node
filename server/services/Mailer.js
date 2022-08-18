const sgMail = require('@sendgrid/mail');
const keys = require("../config/keys");
class Mailer  {
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(keys.sendGridKey);
    this.recipients = recipients;
    this.template = {
      from: 'usuariomillenium1@gmail.com',
      subject,
      html: content,
      trackingSettings: { clickTracking: {enable: true, enableText: true} }
    }
  }

  send = async () => {
    const mailData = this.recipients.map(recipient => ({...this.template, to: recipient.email}))
    try {
      await sgMail.send(mailData);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  };

}

module.exports = Mailer;
