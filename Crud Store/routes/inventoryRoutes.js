const express = require('express')
const inventoryRoutes = express.Router()
// const mongoose = require('mongoose')
const Inventory = require("../models/inventory.js")

//Get (all)
inventoryRoutes.get("/",
 (req, res, next)=>{
    Inventory.find((err, inventories) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//GET (one)
inventoryRoutes.get("/:inventoryId",
 (req, res, next) =>{
    const inventoryId = req.params.inventoryId
    Inventory.findById(inventoryId,
         (err, item)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//POST
inventoryRoutes.post("/",
 (req, res, next) =>{
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//PUT
inventoryRoutes.put("/:inventoryId",
 (req, res, next) =>{
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new:true},
        (err, updatedInventory) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
     )
})

//Delete
inventoryRoutes.delete("/:inventoryId",
 (req, res, next) =>{
    Inventory.findOneAndDelete({_id: req.params.inventoryId},
        (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully Deleted ${deletedItem.product} from Inventory`)
    })
})

module.exports = inventoryRoutes