// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local module

const rootDir = require("../utils/pathUtil");

const homeRouter = express.Router(); 

homeRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports= homeRouter;