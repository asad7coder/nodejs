// Core Modules
// const http = require('http');

// External Modules
const express =require('express');

// Local Modules
const requestHandler = require('./user');

const app = express();

app.get("/",(req,res,next)=>{
  console.log("Came i frist midddleware", req.url, req.method);
  // res.send("<h1>Came i frist midddleware</h1>")
  next();
})

app.post("/submit-details",(req,res,next)=>{
  console.log("Came i second midddleware", req.url, req.method);
  // sending presponse 9.5 
  res.send("<p>Welcome to express node js server</p>"); 
  // res.send(Buffer.from('wahoo'));
  // res.send({ some: 'json' });
    // res.send('<p>some html</p>');
})
app.use("/",(req,res,next)=>{
  console.log("Came i another middleware", req.url, req.method);  
  // res.send("<h1>Came i another middleware</h1>")
})


// const server = http.createServer(app);


const PORT = 3002;
// server.listen(PORT, () => {
  app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});