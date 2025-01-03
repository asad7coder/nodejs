// module for Core
const http = require('http');
// moduel for external
const express = require('express');

const app = express();

const server = http.createServer(app);

app.use('/', (req, res, next) => {
  console.log('First middleware', req.url, req.method);
  next();
});
app.use('/second', (req, res, next) => {
  console.log('Second middleware', req.url, req.method);
  res.send('<p>WelCome to express application</p>');
  next();
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
