var socket = io.connect('http://localhost:4000');

// Collect Input values
let handle = document.getElementById('handle');
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');

// emit data to server through socket
btn.addEventListener('click',() => {
    socket.emit('chat', {
        message : message.value,
        handle : handle.value
    })
    message.value = "";
})

//handle event emitted from server
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})