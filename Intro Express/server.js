// First Express Folder

const express = require("express")
const app = express()
    //1. Endpoint (mount path)
    //2. CallBack function

    //fake data

    const users= [
        {name: 'Bobby', age:62},
        {name:'Matt', age:30},
        {name:'Sydney', age:32},
        {name: 'Stephen', age:27},
        {name:'Sarah', age:21},
        {name:'Hudson', age:7}
    ]


app.get("/users", (req, res)=>{
   res.send(users)
})



        //1: PORT  2: CB
app.listen(9000, ()=>{
    console.log("The server is running on Port 9000")
})