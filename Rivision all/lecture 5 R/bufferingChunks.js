const http = require('http');
fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Allah Hu Akber </h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/submit-details' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write(`
        <h1>Submit Details</h1>
        <form action="/submit-details" method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Enter Your Full Name" />
            <br /><br />
            <label for="Phone">Phone</label>
            <input type="number" name="number" placeholder="+92 000 000000" />
            <br /><br />
            <label for="Gender">Gender</label>
            <input type="radio" name="gender" value="Male" />
            <input type="radio" name="gender" value="Female" />
            <br /><br />
            <input type="submit" />
        </form>
        `);
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.method === 'POST' && req.url === '/submit-details') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    fs.writeFileSync('userDetails.txt', 'Allah hu akber');
    res.setHeader('Location', '/');
    res.statusCode = 302;
    return res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>404 Not Found</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
