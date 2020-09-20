var express = require("express");
var router = express.Router();
const {sendMessage} = require("../public/javascripts/sendEmail.js");
router.post("/", async function(req, res, next) {
  const {email, firstName, lastName, company, message} = req.body.form
  try {
    await sendMessage(email, firstName, lastName, company, message)
    res.send('Success')
  } catch(err) {
    throw new Error(err)
  }

});
router.get("/", function(req, res, next){
  res.send("test");
});

module.exports = router;
