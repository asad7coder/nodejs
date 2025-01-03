const http = require('http');
const requestHandler = require('./calculator');

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Cal Server is Runing Right now http://localhost:${PORT}`);
});
