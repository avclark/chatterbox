var express = require('express');
var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  connections.push(socket);

  socket.on('messageAdded', function(payload){
    var newMessage = {
      text: payload.text,
      user: payload.user
    }

    io.emit('messageAdded', newMessage);
  });

  socket.on('userJoined', function(payload){
    var newUser = {
      id: this.id,
      name: payload.name
    }

    users.push(newUser);
    io.emit('userJoined', users);
  });

  socket.once('disconnect', function(){
    for(var i = 0;i < users.length;i++){
      if(users[i].id == this.id){
        users.splice(i, 1);
      }
    }
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    io.emit('disconnect', users);
  });

});