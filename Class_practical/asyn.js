function Sum(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        
        sum=sum+i;
    }
    console.log(`Sum of number is ${sum}`);   
    return sum;
}

const sumOf=Sum(5);
//console.log(sumOf);



//Importing data from txt file

const fs = require ('fs');    //importing fs to read txt file

const data = fs.readFileSync('F:\\web+devops+web3\\Web(Week-1)\\Class_practical\\a.txt', 'utf8');//tere readFileSync-->It is synchronously

//console.log(data);

const data2 = fs.readFile('F:\\web+devops+web3\\Web(Week-1)\\Class_practical\\a.txt', 'utf8');//tere readFile-->It is asynchronously

//console.log(data2);


//********************** Function arugument ********************

function sum(a,b){
    return a+b;
}
function subtraction(a,b){
    return a+b;
}
function division(a,b){
    return a+b;
}
function callFunction(a,b,op){
    return console.log(op(a,b))
}





//************asynchronously ************

callFunction(2,4,sum)

function print(err,data3){
    console.log(data3);
}
fs.readFile('F:\\web+devops+web3\\Web(Week-1)\\Class_practical\\a.txt','utf8',print);
fs.readFile('F:\\web+devops+web3\\Web(Week-1)\\Class_practical\\a.txt','utf8',print);

//here both the readFile will start together