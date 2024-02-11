const express = require('express')
const bookRouter = express.Router()
const Book = require(("../models/book.js"))

//Get all books
bookRouter.get("/", (req, res, next) =>{
    Book.find((err, books) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//Get by Author
bookRouter.get("/:authorID", (req, res, next) =>{
    Book.find({author: req.params.authorID}, (err, books)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


//Add new book
bookRouter.post('/:authorID', (req, res, next) =>{
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

bookRouter.put("/like/:bookID", (req, res, next) =>{
    Book.findOneAndUpdate(
        //find the book that had this id 
        {_id: req.params.bookID},
        //incriment like by 1 
        {$inc:{likes: 1}},
      
        {new: true},
        (err, updatedBook) =>{
            //handle err
            if(err){
                res.status(500)
                return next(err)
            }  //send back updated likes/book
            return res.status(201).send(updatedBook)
        }
    )
})

module.exports = bookRouter