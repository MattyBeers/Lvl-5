const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuItemSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String
    },
    description:{
        type: String
    },
    restaraunt:{
        type:Schema.Types.ObjectId,
        ref: "Resturuants",
        required: true
    }
})

module.exports = mongoose.model("menuItem", menuItemSchema)