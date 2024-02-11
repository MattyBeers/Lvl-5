
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Customer Blue Print

const customerSchema = new Schema({
    name: {
        type: String,
        
    },
    email:{
        type: String,
        
    },
    phone:{
        type: Number,
        min: 10,
        
        
    },
    order:{
        type: Array,
        items:{
            type: { 
                    type:Schema.Types.ObjectId,
                    ref: "menuItems",
                    //                                        
                  }

        }
    }
    
})

module.exports = mongoose.model("Customer", customerSchema)

// restaraunt:{
//     type:Schema.Types.ObjectId,
//     ref: "Resturuants",
//     required: true
// }