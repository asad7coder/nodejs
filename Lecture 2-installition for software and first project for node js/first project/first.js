console.log('kg coding is the best');
// const { log } = require('console');
// > 1- create file for output.txt
// const fs = require('fs');
// fs.writeFile('output.txt','Writing file', (err)=>{
//   if (err) console.log('Error accurred');
//   else console.log('File writen Successfully');
// })

// > 2- create file for index.html
// core module
const fs = require('fs');
fs.writeFile(
  'index.html',
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h1>Allah Hu Akbar</h1>  
</body>
</html>`,
  (err2) => {
    if (err2) console.log('html file Error Accurred');
    else console.log('File 2 writen Successfully');
  },
);
