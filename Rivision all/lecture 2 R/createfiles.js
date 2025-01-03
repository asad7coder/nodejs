const fs = require('fs');

fs.writeFile('newfile.txt', 'This is a new file', (err) => {
  console.log('something wrong here');
});

fs.writeFile(
  'index.html',
  `<html>
    <head>
        <title>My first web page</title>
    </head>
    <body>
        <h1>My first web page</h1>
    </body>
    </html>`,
  (err) => {
    console.log('something wrong');
  },
);
fs.readFile('index.html', 'utf-8', (err, data) => {
  console.log(data);
});
