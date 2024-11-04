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
  } else if (req.url === '/about') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>About Page</h1></body>');
    res.write('</html>');
    res.end();
  }else if (req.url === '/form') {
    // user form lable username, password, email, message,gender form
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Form Page</h1>');
    res.write(`
        <form action="/" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email"><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" placeholder="Type your message here"></textarea><br><br>

    <label>Gender:</label><br>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>

    <button type="submit">Submit</button>
</form>

    `);
    res.write('</body>');
    res.write('</html>');
    res.end();
    
  } 
  else {
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