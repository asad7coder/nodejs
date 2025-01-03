const http =require('http');

const server=http.createServer((req,res)=>{
  res.end("Hello World NodeMone");
  console.log(req.method ,req.url,req.headers);
});
const PORT= 3001
server.listen(PORT,()=>{
  console.log(`Server running on port http://localhost:${PORT}`);
});