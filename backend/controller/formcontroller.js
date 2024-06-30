const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rhmsonline@gmail.com',
    pass: 'hndw pxyo zywe ccwg',
  },
});

exports.submitForm = (req, res) => {
  const { name, email, otp } = req.body;
  const pdfPath = req.file.path;

  const mailOptions = {
    from: req.body.email,
    to: 'sujaykolar@okulr.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nOTP: ${otp}`,
    attachments: [
      {
        filename: req.file.originalname,
        path: path.resolve(pdfPath),
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Form submitted and email sent');
  });
};
