const express = require('express')
const playerRouter = express.Router()
const {v4: uuidv4} = require('uuid') 

const players = [

    {
        number:"16",
        position:"catcher",
        _id: uuidv4()
    
    },
    {
        number: "8",
        position:"pitcher",
        _id: uuidv4()
    },
    {
        number:"99",
        position:"Runner",
        _id: uuidv4()
    }
]

playerRouter.get("/", (req, res)=>{
    res.send(players)
})




module.exports = playerRouter