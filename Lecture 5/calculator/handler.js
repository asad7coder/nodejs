
const {sumRequestHandler}=require('./sum')
const requestHandler= (req, res) => {
console.log(req.url, req.method);

if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head>
    <title>Calculator</title>
    </head>
    <body>
    <h1>Wlecome to my Node Js Server</h1>
    <a href='/calculator'>Calculator</a>
    </body>
    </html>
    `);
  return res.end();
}else if (req.url.toLowerCase() === '/calculator') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head>
    <title>Calculator</title>
    </head>
    <body>
    <h1>Here is Calculator</h1>
    <form action='/calculate-result' method='POST'>
    <input type="number" placeholder="Enter first number" name="first">
    <input type="number" placeholder="Enter second number" name="second">
    <input type='submit' value='sum' >
    </form>
    <a href='/'>Home</a>
    </body>
    </html>
    `);
  return res.end();
} else  if (req.url.toLowerCase() === '/calculate-result' && req.method == "POST") {
  return sumRequestHandler(req, res);
  // return res.end();
}
res.setHeader('Content-Type', 'text/html');
res.write(`
  <html>
  <head>
  <title>Calculator</title>
  </head>
  <body>
  <h1>404 page does not exist</h1>
  <a href='/' >Go To Home</a>
  </body>
  </html>
  `);
return res.end();
}

exports.requestHandler=requestHandler;