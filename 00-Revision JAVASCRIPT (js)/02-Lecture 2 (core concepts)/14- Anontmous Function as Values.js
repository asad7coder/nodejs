function greeting(){
  console.log('Hello I am here');
  
}
console.log('Before calling the function');
setTimeout(greeting,2000);
console.log('After calling the function');

// 
console.log('Before calling the function');
setTimeout(function(){
  console.log('Hello I am here no2');

},5000)
console.log('After calling the function');
 
const multiply=function(a,b){
  return a*b;
}

console.log(multiply(2,3));