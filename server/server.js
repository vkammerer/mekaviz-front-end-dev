var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('irwinmessage', function (data) {
    console.log(data);
  });
});
