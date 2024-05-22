export default function (req, res) {
  require('dotenv').config();

  const { SMTP_PASSWORD, SMTP_EMAIL, RECEIVER_EMAIL } = process.env;

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: RECEIVER_EMAIL,
    subject: `${req.body.subject} - message from ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log('mail sent');
      res.send('success');
    }
  });
}
