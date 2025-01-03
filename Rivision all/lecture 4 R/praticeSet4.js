const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Allah Hu Akber</title></head>');
    res.write(`<body>
         <h1>Welcome my web page </h1>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
         </ul>
         </body>`);
    res.write('</html>');
    res.end();
  } else if (req.url === '/men') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Allah Hu Akber</title></head>');
    res.write(`<body>
         <h1>this is men page </h1>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
         </ul>
         </body>`);
    res.write('</html>');
    res.end();
  } else if (req.url === '/women') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Allah Hu Akber</title></head>');
    res.write(`<body>
         <h1>this is Women page </h1>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
         </ul>
         </body>`);
    res.write('</html>');
    res.end();
  } else if (req.url === '/kids') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Allah Hu Akber</title></head>');
    res.write(`<body>
         <h1>this is Kids page </h1>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
         </ul>
         </body>`);
    res.write('</html>');
    res.end();
  } else if (req.url === '/cart') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Allah Hu Akber</title></head>');
    res.write(`<body>
         <h1>this is Cart page </h1>
         <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
         </ul>
         </body>`);
    res.write('</html>');
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
