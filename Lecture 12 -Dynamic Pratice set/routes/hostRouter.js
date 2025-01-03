// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local Module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', { pageTitle: "Add Home" , currentPage: "addHome" });
})

const regeisteredHomes=[]

hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body,req.body.houseName);
  regeisteredHomes.push({houseName:req.body.houseName,PricePerNight:req.body.PricePerNight,address:req.body.address,imageUrl:req.body.imageUrl,rating:req.body.rating});
  res.render('homeAdded',{pageTitle:"success home added",currentPage:"homeAdded"})
})


exports.hostRouter = hostRouter;
exports.regeisteredHomes=regeisteredHomes;