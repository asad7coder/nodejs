const http = require("http");
const testingSyntax = require("./syntax");
const praticeSet = require("./praticeSet");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end("Hello World");
  testingSyntax();
  praticeSet();
});
const PORT = 3001;
server.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
