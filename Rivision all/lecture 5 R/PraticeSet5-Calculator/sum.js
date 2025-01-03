const sumRequestHandler = (req, res) => {
  console.log('in sum request handler', req.url);
  const body = [];
  req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator</title>
        </head>
        <body>
            <h1>Sum of ${bodyObj.num1} and ${bodyObj.num2} is ${result}</h1>
        </body>
        </html>
        `);
    return res.end();
  });
};

module.exports = sumRequestHandler;
