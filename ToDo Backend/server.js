const express = require( 'express')
const app = express()

app.use(express.json())

app.use("/todos", require("./routes/todoRouter.js"))

app.listen(8999, () =>{
    console.log("The Server is running on localhost:8999")
})