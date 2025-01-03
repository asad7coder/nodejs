// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local module
const rootDir = require("../utils/pathUtil"); 

const errorRouter = express.Router(); 

errorRouter.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'))
})

module.exports= errorRouter;