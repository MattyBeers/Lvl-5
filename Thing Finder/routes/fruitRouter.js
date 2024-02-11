const express = require('express')
const fruitRouter =express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]
//get all
fruitRouter.get("/",(req, res) =>{
res.send(inventoryItems)
})

//get type //localhost:8000/inventoryItems/search/type?type=toy
fruitRouter.get("/search/type", (req, res)=>{
    const type = req.query.type
    const filteredinventoryItems = inventoryItems.filter(inventoryItem => inventoryItem.type===type)
    res.send(filteredinventoryItems)
})

module.exports = fruitRouter