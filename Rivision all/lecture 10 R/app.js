const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Fix: Explicitly provide the extended option
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/details', (req, res, next) => {
  console.log('Hello World');
  res.send(`
        <h1>Enter Your Details:</h1>
        <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter your name"><br>
            <br><input type="submit" value="Submit">
        </form>
    `);
});

app.post('/submit-details', (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
