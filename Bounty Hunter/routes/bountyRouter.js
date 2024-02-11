const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
const { send } = require('vite')
const bounty = require('../models/bounty.js')


//get all 
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(!bounties){
            return res.send("Hello World")
        }
        return res.status(200).send(bounties)
    })
})

//get one
bountyRouter.get("/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty =>bounty._id === bountyId)
    if(!foundBounty){next
        const error = new Error (`The item with id ${bountyId} was not found`)
        return next(error)
    }   
    res.send(foundBounty)

})

// post one 
    bountyRouter.post("/", (req, res, next) =>{
        const newBounty =new Bounty(req.body)
        newBounty.save((err,savedBounty) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
            })
    })

// Delete one 
    bountyRouter.delete("/:bountyId", (req, res, next) =>{
                    //Criteria for Query 1st Obj Argu, 2nd argu error or goes as planned
        Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) =>{
            if(err){
                res.status(500)
                return next(err)
            }
           return res.status(200).send(`Successfully deleted item ${deletedItem.FirstName} from the database`)
        })
    })

    // Update one 
bountyRouter.put("/:bountyId", (req, res, next)=> {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})
    //drop down search by type 
bountyRouter.get("/search/type", (req, res, next) =>{
    bounty.find({type: req.query.type}, (err, bounties) =>{
        if(err){
            res.status(500)
            return next(err)
        }
            return res.status(200).send(bounties)
        })
    })


    //Other Way get-post
// bountyRouter.route("/")
//     .get((req, res) =>{
//         res.send(bounties)
//     })


//     bountyRoute
//     .post((req, res) =>{
//         const newBounty = req.body
//         newBounty._id = uuidv4()
//         bounties.push(newBounty)
//         res.send(`Succesfully added ${newBounty.FirstName} to the database`)
//     })




    module.exports = bountyRouter