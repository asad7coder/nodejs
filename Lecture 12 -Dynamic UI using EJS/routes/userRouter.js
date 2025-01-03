// Core Module
const path = require("path");
// External Module

const express =require ('express')
const userRouter =express.Router()

// Local Module
const rootDir = require("../utils/pathUtil");
const { regeisteredHomes } = require("./hostRouter");

userRouter.get('/',(req,res,next)=>{
  console.log(regeisteredHomes)
  // res.sendfile(path.join(rootDir,'/views/home.html'));  
  res.render('home',{registeredHomes:regeisteredHomes,pageTitle:"Welcome to airbnb"})
})

module.exports=userRouter;