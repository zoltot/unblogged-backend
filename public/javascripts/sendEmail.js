const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.sendMessage = async (email, firstName, lastName, company, message) => {
  const msg = {
    to: "support@unboggled.com",
    from: process.env.FROM,
    subject: "User has given you contact info",
    html: `<p>Email:<br>${email || ""}</p><p>Name:<br>${
      firstName || ""
    } ${lastName}<p></p>Company:<br>${
      company || ""
    }<p></p>Message:<br>${message}</p>`,
  };
  console.log(msg);
  sgMail.send(msg).then(
    () => {},
    (error) => {
      throw new Error(error);
    }
  );
  return "Sucesss";
};
