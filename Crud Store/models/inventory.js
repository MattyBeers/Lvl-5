const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Crud Inventory

const inventortySchema = new Schema({

product: {
    type: String,
    required: true
},
inStock:{
    type: Boolean,
    required: true
},
price:{
    type: Number,
    required: true
}
   
})

module.exports = mongoose.model("Inventory", inventortySchema)