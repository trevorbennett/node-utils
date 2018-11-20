var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/hello-get', function(req, res) {

res.send( "hello world!!!!" );

});

app.post('/hello-post-return', function(req, res) {

  res.json(req.body);
});