const express = require("express")
const cors = require("cors")
const app = express();
// Configuracion de REST API
app.use(cors({origin: '*'}))
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
const http = require('http').Server(app)

// Configuracion del socket
require('./src/config/socket.config')(http)
require('./src/routes/api.routes')(app) // Rutas

// Ruta simple por GET accesible desde el navegador:
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/src/views/index.html')
// })

const PORT = process.env.PORT || 3000
http.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});
