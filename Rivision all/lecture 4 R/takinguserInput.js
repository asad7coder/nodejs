const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
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
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is runing on localhost:${PORT}`);
});
