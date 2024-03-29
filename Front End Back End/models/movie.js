const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie Blue Print

const movieSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    releaseYear:Number
})

module.exports = mongoose.model("Movie", movieSchema)