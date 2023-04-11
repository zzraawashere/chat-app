var socket = io();

var messages = document.getElementById('messages');
var submitBtn = document.getElementById('submitBtn');
var input = document.getElementById('chatInputText');

submitBtn.addEventListener('click', handleClick);
input.addEventListener('keydown', handleKeyDown);

function handleClick() {
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}


socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
});