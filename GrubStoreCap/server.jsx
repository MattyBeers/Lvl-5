const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://beersmi7:MattB16@cluster0.3f7lac0.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

//route connector Restaraunt, Customer, MenuItem 
app.use("/api/restaurants", require("./routes/restaurantRouter.jsx"))
app.use("/api/customers", require("./routes/customerRouter.jsx"))
app.use("/api/menuItems", require("./routes/menuItemRouter.jsx"))

//error Handler 
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})


//server listen
app.listen(9000,()=>{
    console.log("Grubstore is running on port 9000")
})