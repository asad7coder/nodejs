const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home', currentPage: 'addHome' });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body, req.body.houseName);

  const { houseName, PricePerNight, address, imageUrl, rating } = req.body;
  const home = new Home(houseName, PricePerNight, address, imageUrl, rating);
  home.save();
  res.render('homeAdded', {
    pageTitle: 'success home added',
    currentPage: 'homeAdded',
  });
};

exports.getHomes = (req, res, next) => {
  const regeisteredHomes = Home.fetchAll();
  console.log(regeisteredHomes);
  // res.sendfile(path.join(rootDir,'/views/home.html'));
  res.render('home', {
    registeredHomes: regeisteredHomes,
    pageTitle: 'Welcome to airbnb',
    currentPage: 'Home',
  });
};
