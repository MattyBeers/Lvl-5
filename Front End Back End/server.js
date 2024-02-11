const express = require("express")
const app = express()
const morgan = require ( 'morgan' )
const mongoose = require('mongoose')


//Middleware (for every request)//
app.use(express.json()) //Looks for a request body, and turns it into 'req.body
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


// mongoose.connect('mongodb+srv://beersmi7:MattB16@cluster0.3f7lac0.mongodb.net/?retryWrites=true&w=majority')


// // ()=> console.log("connected to db"))


// .then(() => console.log("connected to db"))
// .catch(err =>console.log(err))
// async function connectToDB(){
//     try{
//         await mongoose.connect('mongodb+srv://beersmi7:<password>@cluster0.lspqmww.mongodb.net/moviedb?retryWrites=true&w=majority')
//         console.log('connected to db')
//     }catch(err){
//         console.log(err)
//     }
// }
// connectToDB()


// mongoose.connect('mongodb://localhost:27017/db-name',{useNewUrlParser: true})
// .then(()=> console.log("Connected to MongoDB"))
// .catch(err => console.error(err));


// Route connector //
app.use("/movies", require("./routes/movieRouter.js"))
// app.use("/tvshows", require("./routes/tvshowRouter.jsx"))

//Error Handler 
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})