var express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'banana',
  resave: false,
  saveUninitialized: true
}))


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/hello-get', function(req, res) {


	console.log(req);
	console.log("session ID: " + req.sessionID);
	res.send( "hello world!!!!" );

});

app.post('/login', function(req, res) {
	console.log(JSON.stringify(req.body))
    console.log("session ID: " + req.sessionID);
	if(req.body.pass=="test123"){
		res.send("Session ID: "+ req.sessionID + " valid" );
	} else {
		res.send("Session ID: "+ req.sessionID + " bad login" );
	}

});