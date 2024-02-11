const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware request
app.use(express.json())
app.use(morgan("dev"))


//connect to db
async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://beersmi7:MattB16@cluster0.3f7lac0.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

//routes
app.use("/inventory", require("./routes/inventoryRoutes.js"))

//error handler
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})


//server listen
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})