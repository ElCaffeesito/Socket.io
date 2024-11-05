import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import router from './routes';
import { Server } from 'socket.io';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use('', express.static(path.join(__dirname, '..', 'public')));

app.use(router);

const server = app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Se conecto un cliente ')

    socket.on('joinRoom', (roomId) => {
        socket.join('room-' + roomId)
    })

    socket.on('sendNewMessage', (data) => {
        console.log('Recibiste un mensaje: ', data);

        socket.broadcast.emit('messageRecieved', data);
    })
})