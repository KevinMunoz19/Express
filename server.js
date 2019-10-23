const express = require('express');
const app = express();

app.use((req,res,next) =>{
  console.log('${req,method}:${req.url}')
  next()
})

app.use((req,res,next) =>{
  if(req.query.api_key){
    next(new Error('oops'))
  } else {
    res.status(401).send({msg :'Not Authorized'})
  }

})



app.get('/accountants', (req,res,next)=>{
console.log('accounts inline middleware')
  next()
},(req,res) => {
  res.send('Hello World Acc')
})

app.get('/transactions', (req,res) => {
  res.send('Hello World Tr')
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})
app.listen(3000)
