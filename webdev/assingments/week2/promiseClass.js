import fs, { read } from "fs" 
//it promises that it  will return something to us in future...
//like the setTimeout function

// setTimeout(()=>{
//     //called after 3 seconds
//     console.log("hello")
// },3000)


// using promise

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// //function that is called is called callback funxtion
// function callback() {
//     console.log("3 seconds have passed");
// }
  
// setTimeoutPromisified(3000).then(callback)


//easy explantion 

// function random(resolve){
//     setTimeout(resolve,3000)
// }

// let p = new Promise(random); 

// function callback(){
//     console.log("done")
// }

// p.then(callback)
