// use 0f || OR
let day ='Saturday';
// let day ='Monday';
if (day ==='Saturday' || day ==='Sunday') {
  console.log('It is a weekend');
} else {
  console.log('It is a weekday');
}
// 
// use 0f && AND
let age = 38;
// let age = 14;
let hasDrivingLicense = true;
if (age >= 18 && hasDrivingLicense) {
  console.log('You can drive');
} else {
  console.log('You can not drive');
}
//
// use 0f ! NOT
let isRaining = false;
if (!isRaining) {
  console.log('It is not raining');
} else {
  console.log('It is raining');
  
}