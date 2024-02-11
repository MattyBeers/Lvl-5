const express = require('express')
const restaurantRouter = express.Router()
const Restaurant = require("../models/restaurant.jsx")

//Get All
restaurantRouter.get("/",
(req, res, next)=>{
    Restaurant.find((err, resturuants)=>{
        if(err){
            res.status(500)
            return(next(err))
        }
        return res.status(200).send(resturuants)
    })
})

//Get One
restaurantRouter.get("/:restaurantId",
(req, res, next)=>{
    const restaurantId = req.params.restaurantId
    Restaurant.findById(restaurantId,
        (err, item)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        })
})

//Post One
restaurantRouter.post("/",(req, res, next)=>{
    const newRestaurant = new Restaurant(req.body)
    newRestaurant.save((err, savedRestaurant)=>{
        // console.log(savedRestuarant)
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedRestaurant)
    })
})

//Delete One
restaurantRouter.delete("/:restaurantId", (req, res, next)=>{
    Restaurant.findOneAndDelete({_id: req.params.restaurantId}, (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the database`)
    })
})
//Edit Restaurant
restaurantRouter.put("/:restaurantId", (req, res, next)=> {
    Restaurant.findOneAndUpdate(
        {_id: req.params.restaurantId},
        req.body,
        {new: true},
        (err, updatedRestaurant) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedRestaurant)
        }
    )
})



module.exports = restaurantRouter