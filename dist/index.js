"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const socket_io_1 = require("socket.io");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use(routes_1.default);
const server = app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('Se conecto un cliente ');
    socket.on('joinRoom', (roomId) => {
        socket.join('room-' + roomId);
    });
    socket.on('sendNewMessage', (data) => {
        console.log('Recibiste un mensaje: ', data);
        socket.broadcast.emit('messageRecieved', data);
    });
});
