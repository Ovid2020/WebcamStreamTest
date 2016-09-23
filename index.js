var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
console.log("Listening on localhost:3000");
server.listen(3000);

io.on('connection', function(socket){ 

  console.log("SOCKET CONNECTED");

  socket.on('send candidate', function(candidate){
    console.log('CANDIDATE: ', candidate);
    console.log('PARSED CANDIDATE DATA: ', JSON.parse(candidate).candidate);
    io.emit('candidate from server ', candidate);
  });

  socket.on('send stream', function(stream){
    console.log('STREAM: ', sream);
    console.log('PARSED STREAM DATA: ', JSON.parse(stream).sdp);
    io.emit('stream from server ', stream);
  });

});



app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index');
});


//app.listen(3000);

