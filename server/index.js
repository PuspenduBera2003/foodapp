const express = require('express');
const connectToMongoDB = require('./db/connection');
const { createServer } = require('node:http');
const cors = require('cors');
const app = express();
const { Server } = require('socket.io');
const port = 5000

const server = createServer(app);
const io = new Server(server);
require('dotenv').config({ path: '.env.local' });
connectToMongoDB();
app.use(express.json())
app.use(cors({ origin: '*' }));
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.use('/api/auth', require('./routes/authentication/auth'));
app.use('/api/password', require('./routes/customization/password'));
app.use('/api/order', require('./routes/food/order'));
app.use('/api/food', require('./routes/food/food'));
app.use('/api/gita', require('./routes/gita/gita'));

server.listen(port, () => {
  console.log(`Foodapp backend running ${port}`)
})