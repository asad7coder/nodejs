const express = require('express');
const userRouter = express.Router();

// Route: GET /
userRouter.get('/', (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button><a href="/form">Form</a></button>
  </body>
</html>`);
  next();
});

module.exports = userRouter;
