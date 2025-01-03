const { URLSearchParams } = require("url");

const sumRequestHandler = (req, res) => {
  console.log("in sum request handler", req.url);

  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>you sum result is ${result}</h1>
        </body>
      </html>
      `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
