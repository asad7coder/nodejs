const http = require('http');
// External module
const express = require('express');
const app = express();

// Local module
const homeRouter = require('./routes/homeRoute');
const userRouter = require('./routes/userRouter');
const rootDir = require('./utils/pathUtil'); // Assuming you are using this elsewhere

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the home router
app.use(userRouter);
app.use(homeRouter);

// Create server and start listening
const PORT = 3001;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
