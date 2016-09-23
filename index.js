var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index');
});

console.log("Listening on localhost:3000");
app.listen(3000);

 