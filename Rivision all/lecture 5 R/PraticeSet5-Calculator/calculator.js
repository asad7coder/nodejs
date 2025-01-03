const sumRequestHandler = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home-Calculator</title>
  </head>
  <body>
    <h1>Welcome to my Calculator Platform</h1>
      <button><a href='/calculator'>Go to your Calculator</a></button>
  </body>
</html>

            `);
    return res.end();
  } else if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
  </head>
  <body>
    <h1>Your Calculator is here</h1>
    <form action="/calculation" method="POST">
      <input type="number" name="num1" />
      <br />
      <br />
      <input type="number" name="num2" />
      <br />
      <br />
      <input type="submit" />
      <br>
      <br>
      <button><a href='/'>Go to Home</a></button>
    </form>
  </body>
</html>

        `);
    return res.end();
  } else if (req.url === '/calculation' && req.method === 'POST') {
    return sumRequestHandler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404-Not Found</title>
  </head>
  <body>
    <h1>404 Page is note found</h1>
      <button><a href='/'>Go to Home</a></button>
  </body>
</html>

        `);
    return res.end();
  }
};

module.exports = requestHandler;
