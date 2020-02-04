const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "alex@alexlee.dev",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along wit the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "alex@alexlee.dev",
    subject: "Sorry to see you go!",
    text: `Sorry to see you go, ${name}. Why did you cancel?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
