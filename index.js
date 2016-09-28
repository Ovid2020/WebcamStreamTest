var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index');
});

io.on('connection', function(socket){ 

  console.log("SOCKET CONNECTED");

  socket.on('send candidate', function(candidate){
    io.emit('message', candidate);
  });

  socket.on('send offer', function(stream){
    io.emit('message', stream);
  });

  socket.on('disconnect call', function() {
    console.log('A user disconnected.');
    io.emit('disconnect call');
  });

  socket.on('disconnect', function() {
    console.log('A user disconnected.');
  });
  
});


server.listen(3000, function() {
  console.log("Listening on localhost:3000");
});

