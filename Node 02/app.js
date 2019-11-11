const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/home',(req,res)=>{
    res.send("Welcome to home")
})

app.get('/api/bears',(req,res)=>{
    let bears = ["Grizzly Bear","Polar Bear","Koala Bear"]
    res.send(bears)
    res.send("Bears!!!")
})

app.get('/bears/1',(req,res)=>{
    let bear = {name : "Polar Bear",Location : "Arctic"}
    res.send(bear)
})

app.get('/bears',(req,res)=>{
    let bears = ["Grizzly Bear","Polar Bear","Koala Bear"]
    res.send(bears)
})

app.listen(PORT,()=>{
    console.log("Server listening in port : "+PORT)
})