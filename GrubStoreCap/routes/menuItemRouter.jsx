const express = require('express')
const menuItemRouter = express.Router()
const MenuItem = require("../models/menuItem.jsx")


//Get All
menuItemRouter.get("/",
(req, res, next)=>{
    MenuItem.find((err, menuItems)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(menuItems)
    })
})

//Get One 
menuItemRouter.get("/:menuItemId",
(req, res, next)=>{
    const menuItemId = req.params.menuItemId
    MenuItem.findById(menuItemId,
        (err, item)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        })
})

// Get by restaruant 
menuItemRouter.get("/restaurant/:restaurantId",(req, res, next) =>{
                  //sub array small array of menuItems with RestaruantId
    MenuItem.find({ restaraunt: req.params.restaurantId }, (err, menuItems) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(menuItems)
    })
})


//Post Menu Item
menuItemRouter.post("/:restaurantId",
(req, res, next)=>{
    req.body.restaurant = req.params.restaurantId
    const newMenuItem = new MenuItem(req.body)
    newMenuItem.save((err, savedMenuItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMenuItem)
    })
})

//PUT
menuItemRouter.put("/:menuItemId",
(req, res, next)=>{
    MenuItem.findByIdAndUpdate(
        {_id: req.params.menuItemId},
        req.body,
        {new: true},
        (err, updatedMenuItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMenuItem)
        }
    )
})

//Delete
menuItemRouter.delete("/:menuItemId",
(req, res, next)=>{
    MenuItem.findByIdAndDelete({_id: req.params.menuItemId},
        (err, deletedItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully Deleted${deletedItem.name} from the database`)
        })
})
// Edit Menu Item
menuItemRouter.put("/:menuItemId", (req, res, next)=> {
    MenuItem.findOneAndUpdate(
        {_id: req.params.menuItemId},
        req.body,
        {new: true},
        (err, updatedMenuItem) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMenuItem)
        }
    )
})



module.exports = menuItemRouter