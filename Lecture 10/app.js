const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("Frist Dummy MiddleWare", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Dummy MiddleWare", req.url, req.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("Third MiddleWare", req.url, req.method );
//   res.send("<h1>Welcome to Asad7Coder</h1>")
// })

app.get("/", (req, res, next) => {
  console.log("Handling / GET ", req.url, req.method);
  res.send("<h1>Welcome to Asad7Coder</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us GET", req.url, req.method);
  res.send(`<h1>Please contact details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your Name"/>
    <input type="email" name="email" placeholder="Enter your Email"/>
    <input type="submit" value="Submit"/>
    </form>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log("Frist Handling", req.url, req.method, req.body);
  next();
});


app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us POST", req.url, req.method, req.body);
  res.send("<h1>We will contact shortly</h1>");
});

const PORT = 3001;
app.listen(PORT, () =>
  console.log(`server is running at port http://localhost:${PORT}`)
);
