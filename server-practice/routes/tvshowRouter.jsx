const express = require('express')
const tvshowRouter = express.Router()
const {v4: uuidv4} = require('uuid') 

const tvShows = [
    {title: "Rick and Morty", _id: uuidv4()},
    {title: "Breaking Bad", _id: uuidv4()},
    {title: "Trailer Park Boys", _id: uuidv4()},
    {title: "Reacher", _id: uuidv4()}
]

        //tvShow Routes//
        tvshowRouter.get("/", (req, res) =>{
            res.send(tvShows)
        })
        
        //get one
        tvshowRouter.get("/:tvShowId", (req, res) =>{
            const tvShowId = req.params.tvShowId
            const foundShow = tvShows.find(show => show._id === tvShowId)
            res.send(foundShow)
        })


        //post one
        tvshowRouter.post("/", (req,res) =>{
            const newtvShow = req.body
            newtvShow._id = uuidv4()
            tvShows.push(newtvShow)
            res.send(`Succesfully added ${newtvShow.title} to the database`)
        })
        




module.exports = tvshowRouter