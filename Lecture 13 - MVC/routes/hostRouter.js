// Core Module
const path = require('path');
// External Module
const express = require('express');
// Local Module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');
const homesController = require('../controllers/homes');

hostRouter.get('/add-home', homesController.getAddHome);

hostRouter.post('/add-home', homesController.postAddHome);

exports.hostRouter = hostRouter;
