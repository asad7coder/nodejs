const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.header);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <h1> This is Module make in node js </h1>
        `);
    return res.end();
  }
};

module.exports = requestHandler;
