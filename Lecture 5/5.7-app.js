const http = require("http");
// const requestHandler = require("5.7-using-modules.js");
const someModule = require('./5.7-using-modules.js');


const server = http.createServer(someModule);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
