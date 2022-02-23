module.exports = (http) => {

  // Global socket instance
  global.io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
  
  io.on('connection', (socket) => {
    console.log('Client connected ...')
  
    socket.on('chatMessage', msg => {
      console.log('Message sent')
      io.emit('chatMessage', msg)
    })
  
    socket.on('disconnect', function () {
      console.log('Client disconected ...')
    })
  })
}
