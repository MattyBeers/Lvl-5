const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Resturuant Schema
const restaurantSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
    
    // ,
    // picture: {
    //     data: Buffer,
    //     contentType: String,
    //     filename: String
    // }
})

module.exports = mongoose.model("restaurants", restaurantSchema)
