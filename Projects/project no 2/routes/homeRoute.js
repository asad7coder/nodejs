const express = require('express');
const fs = require('fs'); // Importing fs
const path = require('path');
const router = express.Router();

// Route: GET /
router.get('/form', (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <form action="/submit" method="post">
      <input type="text" name="Name" placeholder="Enter Your Shop Name" />
      <input type="text" name="Type_of_Shop" placeholder="Enter Type of Shop?" />
      <input type="submit" />
    </form>
  </body>
</html>`);
  // next();
});

// Route: POST /submit
router.post('/submit', (req, res, next) => {
  const bodyObj = req.body;
  console.log(bodyObj);

  // Write data to file
  fs.writeFileSync(
    path.join(__dirname, 'data.txt'),
    JSON.stringify(bodyObj, null, 2),
  );

  // Send response back to client
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Data Received</h1>
    <button><a href="/">Back Home</a></button>
  </body>
</html>`);
  // next();
});

// 404 handler for this router
router.use((req, res, next) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 Not Found</title>
  </head>
  <body>
    <h1>404 Page Not Found</h1>
  </body>
</html>`);
});

module.exports = router;
