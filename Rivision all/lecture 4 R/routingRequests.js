const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head> <title> Allah Hu Akber </title> </head>');
  res.write('<body>');
  if (req.url === '/') {
    res.write('<h1>Allah Hu Akber </h1>');
    return res.end();
  } else if (req.url === '/mashallah') {
    res.write('<h1>Mashallah Alhamdulillah </h1>');
    return res.end();
  }
  res.write('<h1>some thing wrong output</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server Running on localhost:${PORT}`);
});
