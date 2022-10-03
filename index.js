var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, () => {
    console.log('Server started on port 3000');
})

app.use(express.static('public'))

var io = socket(server,{
    allowEIO3: true
});

io.on('connection', socket => {
    console.log(`Made connection with Id ${socket.id}`);

    socket.on('chat', (data) => {
        io.sockets.emit('chat',data)
    });
})

