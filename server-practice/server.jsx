const express = require("express")
const app = express()
const morgan = require ( 'morgan' )


//Middleware (for every request)//
app.use(express.json()) //Looks for a request body, and turns it into 'req.body
app.use(morgan('dev')) // logs request to the console


// Route connector //
app.use("/movies", require("./routes/movieRouter.jsx"))
app.use("/tvshows", require("./routes/tvshowRouter.jsx"))

// Server Listen //
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})