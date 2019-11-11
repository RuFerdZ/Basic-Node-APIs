const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

let bearArray = [
    { id:1 , name:"Grizzly Bear",Location :"Asia"},
    { id:2 , name:"Polar Bear",Location :"Arctic"},
    { id:3 , name:"Koala Bear",Location :"Australia"}
]

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/home',(req,res)=>{
    res.send("Welcome to home")
})

// app.get('/api/bears',(req,res)=>{
//     res.send(bearArray)
// })

// app.get('/api/bears',(req,res)=>{
//     let bears = ["Grizzly Bear","Polar Bear","Koala Bear"]
//     res.send(bears)
//     //res.send("Bears!!!")
// })

// app.get('/api/bears/1',(req,res)=>{
//     let bear = {name : "Polar Bear",Location : "Arctic"}
//     res.send(bear)
// })

// app.get('/api/bears',(req,res)=>{
//     let bears = ["Grizzly Bear","Polar Bear","Koala Bear"]
//     res.send(bears)
// })


// app.get('/api/bears/:bearId',(req,res)=>{
//     //let bear= {id : req.params.bearId }
//     let bear = "User has requested for bear id : " + req.params.bearId
//     var filterByQueryParam = "User has requested for query param : " + req.query.filterBy;
//     //res.send(bear)
//     res.send(filterByQueryParam)
// })

app.get('/api/bears/:bearId',(req,res)=>{
    var selected = parseInt(req.params.bearId)
    let bear = bearArray.find(b => b.id === selected)

    bearArray.forEach(bA => {
        if (bA.id===selected){
            res.send(bear)
        }
    });
    res.status(404).send("Id not Found")


    // if(!bear){
    //     res.status(404).send("Id not Found")
    // }else{
    //     res.send(bear)
    // }
})


app.post('/api/bears',(req,res)=>{
    let newBearObj = {
        id: bearArray.length + 1,
        name: req.body.name,
        Location: req.body.Location
    }

    bearArray.push(newBearObj)
    res.send(bearArray)
})

app.put("/api/bears/:bearId",(req,res)=>{
    //find required bear array
    //if not send 404
    //do check in body values for name and location
    //value not available 400
    //otherwise set the name and location to thar particular object
    var selected = parseInt(req.params.bearId)
    let bear = bearArray.find(b => b.id === selected)

    if(!bear)
    {
        res.status(404).send("Id not Found")
    }else
    {
        bearArray[selected] = {
            id: bearArray.id,
            name: req.body.name,
            Location: req.body.Location
        }
        if((!req.body.name)||(!req.body.Location))
        {
            res.status(400).send("Empty Fields")
        }
        else{
            res.send(bearArray)
        }
    }
})

app.listen(PORT,()=>{
    console.log("Server listening in port : " + PORT)
})