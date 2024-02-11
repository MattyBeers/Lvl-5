const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')



        //MovieRoutes////get all
        movieRouter.get("/", (req, res, next) => {
            Movie.find((err, movies)=>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                if(!movies){
                    return res.send("Hello World")
                }
                return res.status(200).send(movies)
            })
        })

        //get one 
        movieRouter.get("/:movieId", (req, res, next) => {
            const movieId = req.params.movieId
            const foundMovie = movies.find(movie => movie._id ===movieId )
            if(!foundMovie){next
                const error = new Error (`The item with id ${movieId}  was not found.`)
                res.status(500)
                return next(error)
            }
            res.status(200).send(foundMovie)
        })
            //get Genre
        movieRouter.get("/search/genre" , (req, res, next) =>{
            Movie.find({genre: req.query.genre},(err, movies) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(movies)
            })
        })


        // post one
        movieRouter.post("/", (req, res, next) =>{
            const newMovie =new Movie(req.body)
        newMovie.save((err,savedMovie) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedMovie)
            })
        })


        // Delete one 
        movieRouter.delete("/:movieId", (req, res, next)=>{
            Movie.findOneAndDelete({_id: req.params.movieId},(err, deletedItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }   
            return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`) 
            })
        })

        //Update One
         movieRouter.put("/:movieId", (req, res, next) =>{
            Movie.findOneAndUpdate(
                {_id: req.params.movieId},//find this one update
                req.body,//update the object with this data
                {new: true},//send back the updated version please
                (err, updatedMovie) =>{
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedMovie)
                }
            )
        })

   // another way of wirting get, post requests // 
        // movieRouter.route("/")
        //     .get((req, res) => {
        //         res.send(movies)
        //     })
        //     .post((req, res) =>{
        //         const newMovie = req.body
        //         newMovie._id = uuidv4()
        //         movies.push(newMovie)
        //         res.send(`Successfully added ${newMovie.title} to the database`)
        //     }) 
            



module.exports = movieRouter