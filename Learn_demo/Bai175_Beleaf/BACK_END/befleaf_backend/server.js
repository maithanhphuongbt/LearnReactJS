var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:5000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

const db = require('./app/config/Database');

//socket init

const socketIO = require('socket.io')

// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./app/route/ExploreRoute')(app);

// Create a Server
var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected')
  
  // just like on the client side, we have a socket.on method that takes a callback function
  // socket.on('change color', (color) => {
  //   // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
  //   // we make use of the socket.emit method again with the argument given to use from the callback function above
  //   console.log('Color Changed to: ', color)
  //   io.sockets.emit('change color', color)
  // })
  
  socket.on('send message', (message) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Message send: ', message)
    io.sockets.emit('send message', message)
  })
  
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})