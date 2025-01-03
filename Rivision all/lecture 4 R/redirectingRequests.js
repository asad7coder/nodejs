const http = require('http');
fs = require('fs');

const server = http.createServer((req, res) => {
  //   console.log(req.method, req.url, req.headers);
  console.log(req.url, req.method, req.headers);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html lang="en">
  <body>
    <form action="/submit-details" method="post">
      <label for="name">Name</label>
      <input type="text" name="name" placeholder="Enter Your Full Name" />
      <br />
      <label for="Phone">Phone</label>
      <input type="number" name="number" placeholder="+92 000 000000" />
      <br />
      <label for="Gender">Gender</label>
      <input type="radio" name="gender" value="Male" />
      <input type="radio" name="gender" value="Female" />
      <input type="submit" />
    </form>
  </body>
</html>
        `);
    res.end();
  } else if (
    req.method == 'POST' &&
    req.url.toLowerCase() === '/submit-details'
  ) {
    fs.writeFileSync('userDetails.txt', 'This is a new file');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is runing on http://localhost:${PORT}`);
});
