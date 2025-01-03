// create node js server
const http = require('http');
const requestingCal = require('./99-pratise-set.js');
const server = http.createServer(requestingCal)

// server.listen(3000);
const PORT = 3001;
server.listen(PORT,() => {
  console.log(`Server running on address http://localhost:${PORT}`);

})