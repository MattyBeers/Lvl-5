const express = require("express")
const app = express()

const users= [
    {name: 'Bobby', age:62},
    {name:'Matt', age:30},
    {name:'Sydney', age:32},
    {name: 'Stephen', age:27},
    {name:'Sarah', age:21},
    {name:'Hudson', age:7}
]


app.get("/users", (req, res) => {
   res.send(users)
})


app.listen(8999, ()=>{
    console.log('The server is running on port 8999')
})