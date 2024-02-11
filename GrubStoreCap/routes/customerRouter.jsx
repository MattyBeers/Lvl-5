const express = require('express')
const customerRouter = express.Router()
const Customer = require("../models/customer.jsx")

//Get All
customerRouter.get("/",
(req, res, next)=>{
    Customer.find((err, customers)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(customers)
    })
})

//Get One 
customerRouter.get("/:customerId",
(req, res, next)=>{
    const customerId = req.params.customerId
    Customer.findById(customerId,
        (err, item)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        })
})

//Post
customerRouter.post("/",
(req, res, next)=>{
    console.log(req.body)
    const newCustomer = new Customer(req.body)
    newCustomer.save((err, savedCustomer)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCustomer)
    })
})

//PUT Edit cutomer info 
customerRouter.put("/customerId",
(req, res, next)=>{
    Customer.findByIdAndUpdate(
        {_id: req.params.customerId},
        req.body,
        {new: true},
        (err, updatedCustomer)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCustomer)
        }
    )
})

//Delete
customerRouter.delete("/:customerId",
(req, res, next)=>{
    Customer.findByIdAndDelete({_id: req.params.customerId},
        (err, deletedItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully Deleted${deletedItem.name} from the database`)
        })
})



module.exports = customerRouter