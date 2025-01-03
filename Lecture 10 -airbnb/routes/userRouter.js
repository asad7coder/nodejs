// Core Module
const path = require("path");

// External Module

const express =require ('express')
const userRouter =express.Router()

// Local Module
const rootDir = require("../utils/pathUtil");
userRouter.get('/',(req,res,next)=>{
  res.sendfile(path.join(rootDir,'/views/home.html'));  
})

module.exports=userRouter;