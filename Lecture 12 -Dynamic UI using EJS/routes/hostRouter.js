// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local Module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', { pageTitle: "Add Home" });
})

const regeisteredHomes=[]

hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body,req.body.houseName);
  regeisteredHomes.push({houseName:req.body.houseName});
  res.render('homeAdded',{pageTitle:"success home added"})
})


exports.hostRouter = hostRouter;
exports.regeisteredHomes=regeisteredHomes;