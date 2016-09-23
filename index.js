var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index');
});

io.on('connection', function(socket){ 

  console.log("SOCKET CONNECTED");

  socket.on('send candidate', function(candidate){
    console.log('CANDIDATE: ', candidate);
    //console.log('PARSED CANDIDATE DATA: ', JSON.parse(candidate).candidate);
    io.emit('stream from server', candidate);
  });

  socket.on('send stream', function(stream){
    console.log('STREAM: ', stream);
    //console.log('PARSED STREAM DATA: ', JSON.parse(stream).sdp);
    io.emit('stream from server', stream);
  });

  socket.on('disconnect', function() {
    console.log('a user disconnected.');
  })
});


server.listen(3000, function() {
  console.log("Listening on localhost:3000");
});

//app.listen(3000);

