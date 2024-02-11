const express = require("express")
const app = express()


//Middleware (for every request)
app.use(express.json()) //Looks for a request, body, and turns it into 'req.body'

//Fake Data





//Routes
app.use("/movies", require("./routes/moviesRouter.js"))
app.use("tvshows", require("./routes/tvShowsRouter.js"))





// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})