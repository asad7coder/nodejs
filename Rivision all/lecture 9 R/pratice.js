// Core Module
const http = require('http');

// External Module
const express = require('express');

const app = express();

const server = http.createServer(app);

// Home Route
app.get('/', (req, res) => {
  console.log('Home route accessed:', req.url, req.method);
  res.send('<p>Welcome to the Express application</p>');
});

// Contact Page Route
app.get('/contact', (req, res) => {
  console.log('Contact page accessed:', req.url, req.method);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Page</title>
    </head>
    <body>
        <form action="/contact" method="post">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" value="Submit">
        </form>
    </body>
    </html>
  `);
});

// Handle Contact Form Submission
app.post('/contact', (req, res) => {
  console.log('Form submitted:', req.body);
  res.send('<p>Thank you for your submission!</p>');
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
