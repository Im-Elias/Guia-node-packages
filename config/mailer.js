import nodemailer from "nodemailer";

const enviar = (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
};

export default enviar;
