//    Promice  Syntex for calling                                 Callback  Syntex
//setTimeoutPromisified(3000).then(callback)                 setTimeout(callback,3000)


function random(resolve){         //resolve is also a function which mean promise is function
    resolve()                     //which has function "random" and random also have function
}                                 // function "resolve"
const p = new Promise(random)     //in simple words Promice has function which also has function
//console.log(p);


function callback(){
    //console.log("Promice is succeded"); 
}
p.then(callback);     //When ever "resolve" function is completed then "callback" function will work and this is the work of Promice function





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


P.then(CallBack);