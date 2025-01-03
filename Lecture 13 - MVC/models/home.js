// Core module
const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtil');

// fake database

const regeisteredHomes = [];

module.exports = class Home {
  constructor(houseName, PricePerNight, address, imageUrl, rating) {
    this.houseName = houseName;
    this.PricePerNight = PricePerNight;
    this.address = address;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
  save() {
    regeisteredHomes.push(this);
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(regeisteredHomes), (error) => {
      console.log('file write concluded', error);
    });
  }
  static fetchAll() {
    return regeisteredHomes;
  }
};
