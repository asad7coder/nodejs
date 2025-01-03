// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local Module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir,"views/addHome.html"));
})

hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body);
  
  res.sendFile(path.join(rootDir,'views','homeAdded.html'));
})


module.exports = hostRouter;