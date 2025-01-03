// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local module 
const rootDir = require("../utils/pathUtil");

const contactRouter = express.Router();


contactRouter.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
})
 contactRouter.post('/contact-us',(req,res,next)=>{  
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'))
  
 })

 module.exports= contactRouter;