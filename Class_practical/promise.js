//    Promice  Syntex for calling                                 Callback  Syntex
//setTimeoutPromisified(3000).then(callback)                 setTimeout(callback,3000)


function random(resolve){         //resolve is also a function which mean promise is function
    resolve()                     //which has function "random" and random also have function
}                                 // function "resolve"
const p = new Promise(random)     //in simple words Promice has function which also has function
//console.log(p);


function callback(){
    console.log("Promice is succeded"); 
}
//p.then(callback);     //When ever "resolve" function is completed then "callback" function will work and this is the work of Promice function





//*********************  ReadFile by Promice  ******************
const fs = require("fs");

function readFile(whatWritten){    
    fs.readFile('F:\\web+devops+web3\\Web(Week-1)\\Class_practical\\a.txt', 'utf8',function(err,data){
        whatWritten(data);
    })
}
function promiseOne(){
    
    return new Promise(readFile)
}

const P =promiseOne();

function CallBack(consts){
    console.log(consts);
}


//P.then(CallBack);


//  ****************** Practise of Promice*****************************

function timeOut(resolve){
    setTimeout(resolve,3000);
}

let adi = new Promise(timeOut);

function callback(){
    console.log("3 sec has done"); 
}
//adi.then(callback);

// *************** Making Promice ***********************

function setTimeoutPromisified(duration){
    return new Promise(function doing(resolves){
        //console.log("Hello World")
        setTimeout(resolves,duration)
    })
}
function callbacks(){
    console.log("Hi")
}
//setTimeoutPromisified(1000).then(callbacks);

// *********** Callback Hell ***************
// It is nested asyn function

setTimeout(function (){
    console.log("Hi");
    setTimeout(function(){
        console.log("Hello");  
        setTimeout(function(){
            console.log("Helle there");
            
        },5000)      
    },3000)
},1000)

//         OR we can do with promice

function code3(){
    console.log("Hello there");
}

function code2(){
    console.log("Hello");
    setTimeout(code3,5000);
}

function code1() {
    console.log("Hi");
    setTimeout(code2,3000);
};
setTimeout(code1,1000);
