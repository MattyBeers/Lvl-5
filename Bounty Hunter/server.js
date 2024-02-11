const express = require("express")
const app = express()
const morgan = require ('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev')) // logs request to the console


//connect to DB
async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://beersmi7:MattB16@cluster0.3f7lac0.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

//route connector
app.use("/bounties", require("./routes/bountyRouter.js"))

//Error Handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})


// server listen 
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})