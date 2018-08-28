//var config = require('./config.json');
//var twilio = require('twilio');
//var client = new twilio(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "london.mxroute.com",
    port: 587,
    auth: {
        user: '@trevorbennett.us',
        pass: ''
    }
});

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.post('/post', function(req, res) {

    var payload = req.body;
    console.log(payload);
    //client.messages.create({
    //    body: payload.todoInput,
    //    to: '+17402554915',  // Text this number
    //    from: '+12169105389' // From a valid Twilio number
    //})
    //.then((message) => console.log(message.sid));

    var mailOptions = {
      from: 'me@trevorbennett.us',
      to: 'nodetest@trevorbennett.us',
      subject: 'Testing a node payload',
      text: payload.todoInput
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

});