// create server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  
  // Define a common home button HTML snippet
  const homeButton = '<button><a href="/">Back Home</a></button>';

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1><h3>NavBar</h3><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/men">Men</a></li><li><a href="/women">Women</a></li><li><a href="/kids">Kids</a></li></ul></nav>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Practice Set</title></head>');
    res.write('<body><h1>About Page</h1>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/men') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Men-Page</title></head>');
    res.write('<body><h1>Men Page</h1><p>This is the men page</p>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/women') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Women-Page</title></head>');
    res.write('<body><h1>Women Page</h1><p>This is the women page</p>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/cards') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Cards-Page</title></head>');
    res.write('<body><h1>Cards Page</h1><p>This is the cards page</p>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/kids') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Kids-Page</title></head>');
    res.write('<body><h1>Kids Page</h1><p>This is the kids page</p>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    // 404 page
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1>');
    res.write(homeButton); // Add back home button
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
