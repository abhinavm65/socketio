var socket = io.connect('http://192.168.1.35:4000');

// Collect Input values
let handle = document.getElementById('handle');
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

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
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

message.addEventListener('keypress', () => {
    socket.emit('typing',handle.value);
})

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})