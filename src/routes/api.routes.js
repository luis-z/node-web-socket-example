const path = require("path")

module.exports = (app) => {
  app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') })
  })
}