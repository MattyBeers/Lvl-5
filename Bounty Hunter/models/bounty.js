const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bounty Blue Print

const bountySchema = new Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Living:{
        type: Boolean 
    }, 
     BountyAmount:{
        type: Number,
        required: true
    },
    //consider having drop down to avoid user input 
    type:{
        type: String,
        enum:['Sith', 'Cartel', 'Terrorist'],
        required: true
    }
})

module.exports = mongoose.model("Bounties", bountySchema)

