const http = require('http');
const express = require('express');

// Import routers
const userRouter = require('./router/user');
const hostRouter = require('./router/host');

const app = express();

// Middleware to parse JSON if needed
app.use(express.json());

// Use routers
app.use('/users', userRouter); // Add a base route like '/users'
app.use('/hosts', hostRouter); // Add a base route like '/hosts'

const PORT = 3002;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
