import express from 'express'  

const app = express()

// app.get('/', (req, res) => {   //this means when "/" is accessed we send "Hello World"
//   res.send('Hello World')
// })

// app.listen(3000)              //which means the server is listening on port 3000




// function calSum(n){
//   let sum =0;
//   for(let i = 0;i<=n;i++){
//     sum = sum +1;
//   }
//   return sum;
// }
// app.get('/',function(req,res){
//   const n = req.query.n;
//   const ans = calSum(n);
//   res.send(ans.toString())
// })


const user = [{
  name: "John",
  kidney:[{
    healthy: true
  }]
}]

app.get('/',function (req,res){
  const johnKidney = user[0].kidney;
  const numberofkidney = johnKidney.length;
  let numberofhealthykidney = 0;
  for(let i = 0;i<kidney.length;i++){
    if(johnKidney[i].healthy){
      numberofhealthykidney = numberofhealthykidney + 1;
    }
  }  
  const numberofunhealthykidney = numberofkidney - numberofhealthykidney;

  res.json({
    johnKidney,
    numberofkidney,
    numberofhealthykidney,
    numberofunhealthykidney
  })
})

app.listen(3000);