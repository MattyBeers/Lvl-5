const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://beersmi7:MattB16@cluster0.3f7lac0.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

app.use("/book", require("./routes/bookRouter.js"))
app.use("/authors", require('./routes/authorRouter.js'))


app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server is running on port 9000")
})