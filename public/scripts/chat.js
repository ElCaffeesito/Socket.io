const socket = io('/');

const messageInput = document.getElementById('input');
const user = sessionStorage.getItem('user')
const alterUser = sessionStorage.getItem('alterUser')

const title = document.getElementById('title').innerText = 'Welcome ' + user + '!'

const roomId = window.location.href.split('/').pop();

socket.emit('joinRoom', roomId);

document.getElementById('trigger').addEventListener('click', () => {
    const msg = messageInput.value;
    messageInput.value = '';
    console.log('Vas a enviar el texto: ', msg)
    const message = document.createElement("div");
    const date = new Date();

    message.innerHTML = `<label>${user}</label> <p>${msg}</p> <p>${date.toLocaleString('en-GB')}</p>`
    message.className = "message";
    message.classList.add("right");
    document.getElementById('messages').appendChild(message)

    socket.emit('sendNewMessage', {
        user: user,
        message: msg,
        room: roomId
    })
})

socket.on('messageRecieved', (data) => {
    console.log('Otro usuario mando el mensaje: ',data)
    const otherMessage = document.createElement("div");
    const date = new Date();

    otherMessage.innerHTML = `<label>${data.user}</label> <p>${data.message}</p> <p>${date.toLocaleString('en-GB')}</p>`
    otherMessage.className = "message";
    otherMessage.classList.add("left");
    document.getElementById('messages').appendChild(otherMessage)
})