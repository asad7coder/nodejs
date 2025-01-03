const fs = require('fs'); 
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>99-pratice</title></head>');
    res.write(`<body>
      <h1>Wlecome to my Node Js Server</h1>
      <a href='/calculator'>Calculator</a>
      </body>`);
    res.write('</html>');
    return res.end();
  } else if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>99-pratice</title></head>');
    res.write(`<body>
      <h1>Calculator</h1>
      <form action="/calculator" method="POST">
        <input type="number" name="num1">
        <input type="number" name="num2">
        <button type="submit">Sum</button>
      </form>
      </body>`);
    res.write('</html>');
    return res.end();
  }else if (req.url.toLowerCase() === '/calculator' && req.method == "POST") {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      const num1 = Number(bodyObject.num1);
      const num2 = Number(bodyObject.num2);
      const sum = num1 + num2;
      console.log(sum);
      res.statusCode = 302;
      res.setHeader('Location', '/calculator');
      fs.writeFileSync('99-pratise-set.txt', JSON.stringify(sum));
    })
  }

}

module.exports = userRequestHandler;