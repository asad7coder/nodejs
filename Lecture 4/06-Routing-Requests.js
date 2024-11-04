const http = require('http');

const server =http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  // process.exit();

  if (req.url === '/') {
    res.setHeader('Content-Type','text/html');

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();  
  } else if (req.url.toLowerCase() === '/about') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>About Page</h1></body>');
    res.write('</html>');
    res.end();
  } else {
    // 404 page
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
  }

  // res.setHeader('Content-Type','text/html');

  // res.write('<html>');
  // res.write('<head><title>My First Page</title></head>');
  // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  // res.write('</html>');
  // res.end();
});

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log(`Server running on port http://localhost:${PORT}`);
})