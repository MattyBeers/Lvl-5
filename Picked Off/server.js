const express = require("express")
const app = express()

app.use(express.json())

app.use("/players", require("./routes/playerRouter.js"))

app.use("/", (req , res, next) =>{
    console.log("Picks executed")
    next()
})

app.use("/", (req, res, next) =>{
    req.body = "Catcher Picks off Runner"
    next()
})

app.get("/", (req, res, next) =>{
    console.log("Get request for pick off assng")
    res.send(req.body)
})




app.listen(9000, () =>{
    console.log("Server is running on localhost:9000")
})
