function greeting(name){
  console.log(`Welcome ${name}`);
  
}


function getUserInput(callback){
  let name = prompt('Please enter your name') //prompt is a brower function not working in ternimnal go yo dev tools and open console/browser console
  callback(name)
}
getUserInput(greeting)