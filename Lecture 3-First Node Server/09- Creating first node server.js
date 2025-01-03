const { log } = require('console');
const http = require('http');
// normal node js  server
// function requestListener(req, res) {
//   console.log(req);
//  }

//  http.createServer(requestListener);

// anomenumous function
const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
